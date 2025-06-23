import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Table, Card, Spinner, Alert, Button, Modal, Form } from 'react-bootstrap';
import { FiEdit2, FiTrash2, FiSearch, FiX, FiSave } from 'react-icons/fi';
import axios from 'axios';
import Navbar from '../../admin/sidebar/Navbar';

interface ContactType {
  id: number;
  name: string;
  phone?: string;
  email: string;
  message: string;
  created_at: string;
}

const Contact: React.FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentContact, setCurrentContact] = useState<ContactType | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/contacts`);
        setContacts(response.data);
        setError('');
      } catch (err: any) {
        console.error('Error fetching contacts:', err);
        setError(err.response?.data?.message || err.message || 'Failed to fetch contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      await axios.delete(`${API_BASE_URL}/contacts/${id}`);
      setContacts(contacts.filter((c) => c.id !== id));
      setError('');
    } catch (error: any) {
      console.error('Error deleting contact:', error);
      setError(error.response?.data?.message || error.message || 'Failed to delete contact');
    }
  };

  const handleEditClick = (contact: ContactType) => {
    setCurrentContact(contact);
    setFormData({
      name: contact.name,
      phone: contact.phone || '',
      email: contact.email,
      message: contact.message
    });
    setShowEditModal(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentContact) return;

    try {
      const response = await axios.put(`${API_BASE_URL}/contacts/${currentContact.id}`, formData);
      setContacts(contacts.map(c => c.id === currentContact.id ? response.data : c));
      setShowEditModal(false);
      setError('');
    } catch (error: any) {
      console.error('Error updating contact:', error);
      setError(error.response?.data?.message || error.message || 'Failed to update contact');
    }
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  return (
    <div style={{ marginTop: '60px' }}>
        <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div
        className="contact-table-content"
        style={{
          marginLeft: sidebarCollapsed ? '100px' : '220px',
          padding: '2rem',
          transition: 'margin-left 0.3s ease',
        }}>
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="text-center mb-4">📞 Contact Messages</h2>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <div className="position-relative" style={{ width: '300px' }}>
                <FiSearch className="position-absolute" style={{ top: '10px', left: '10px', color: '#6c757d' }} />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  className="form-control ps-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {loading ? (
              <div className="text-center">
                <Spinner animation="border" />
                <p className="mt-2">Loading contacts...</p>
              </div>
            ) : error ? (
              <Alert variant="danger" className="text-center" onClose={() => setError('')} dismissible>
                {error}
              </Alert>
            ) : (
              <div className="table-responsive">
                <Table bordered hover>
                  <thead className="table-dark">
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentContacts.length > 0 ? (
                      currentContacts.map((contact, index) => (
                        <tr key={contact.id}>
                          <td>{indexOfFirst + index + 1}</td>
                          <td>{contact.name}</td>
                          <td>{contact.phone || '-'}</td>
                          <td>{contact.email}</td>
                          <td style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{contact.message}</td>
                          <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center py-4">No contacts found</td>
                      </tr>
                    )}
                  </tbody>
                </Table>

                {filteredContacts.length > contactsPerPage && (
                  <div className="d-flex justify-content-center mt-3">
                    <nav>
                      <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button className="page-link" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
                        </li>

                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }

                          return (
                            <li key={pageNum} className={`page-item ${pageNum === currentPage ? 'active' : ''}`}>
                              <button className="page-link" onClick={() => setCurrentPage(pageNum)}>{pageNum}</button>
                            </li>
                          );
                        })}

                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button className="page-link" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Next</button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
