import { useState } from 'react';
import axios from 'axios';

export default function SubmitComplaint() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitComplaint = async () => {
    await axios.post('/api/complaints', { title, description });
    alert('Complaint submitted!');
  };

  return (
    <div className="p-4">
      <h1>Submit a Complaint</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={submitComplaint}>Submit</button>
    </div>
  );
}