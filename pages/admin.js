// pages/admin.js
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const apiUrl = 'https://api.andhim.net/info';

  const [infoList, setInfoList] = useState([]);
  const [judul, setJudul] = useState('');
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setInfoList(data);
  };

  const tambahData = async () => {
    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ judul, url }),
    });
    setJudul('');
    setUrl('');
    loadInfo();
  };

  const hapusData = async (index) => {
    await fetch(`${apiUrl}/${index}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    loadInfo();
  };

  const updateData = async (index) => {
    const newJudul = prompt('Judul baru:');
    const newUrl = prompt('URL baru:');
    if (newJudul && newUrl) {
      await fetch(`${apiUrl}/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ judul: newJudul, url: newUrl }),
      });
      loadInfo();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Halaman Admin Info</h1>

      <label>
        Masukkan Token (sementara):
        <input value={token} onChange={(e) => setToken(e.target.value)} />
      </label>

      <h2>Tambah Info</h2>
      <input
        placeholder="Judul"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
      /><br />
      <input
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      /><br />
      <button onClick={tambahData}>Tambah</button>

      <h2>Daftar Info</h2>
      <ul>
        {infoList.map((item, index) => (
          <li key={index}>
            <strong>{item.judul}</strong><br />
            <button onClick={() => hapusData(index)}>Hapus</button>
            <button onClick={() => updateData(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
