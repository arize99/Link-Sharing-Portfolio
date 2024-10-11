import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const LinkSharingPortfolio = () => {
  const [links, setLinks] = useState({
    github: '',
    linkedin: '',
    twitter: '',
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState('');

  const handleLinkChange = (e) => {
    const { name, value } = e.target;
    setLinks(prevLinks => ({ ...prevLinks, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const uploadToPinata = async () => {
    if (!profilePhoto) return;

    const formData = new FormData();
    formData.append('file', profilePhoto);

    try {
      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        body: formData,
        headers: {
          'pinata_api_key': 'ac4fc213f1959bcbcd2b',
          'pinata_secret_api_key': '7f1ccc1bd76a44ba99248942b0eb70b4259610b23fd922c8b027adaa8b8d523a',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to upload to Pinata');
      }

      const data = await response.json();
      const ipfsHash = data.IpfsHash;
      setPhotoUrl(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
    } catch (error) {
      console.error('Error uploading to Pinata:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Link Sharing Portfolio</h1>
      
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Profile Photo</label>
        <div className="flex items-center space-x-4">
          {photoUrl && <img src={photoUrl} alt="Profile" className="w-16 h-16 rounded-full object-cover" />}
          <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
            <Upload className="mr-2" size={20} />
            <span>Upload Photo</span>
            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
          </label>
          <button onClick={uploadToPinata} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Save to Pinata
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">GitHub</label>
          <input
            type="url"
            name="github"
            value={links.github}
            onChange={handleLinkChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="https://github.com/yourusername"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            value={links.linkedin}
            onChange={handleLinkChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="https://linkedin.com/in/yourusername"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Twitter</label>
          <input
            type="url"
            name="twitter"
            value={links.twitter}
            onChange={handleLinkChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="https://twitter.com/yourusername"
          />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Your Links:</h2>
        <ul className="list-disc list-inside">
          <li>GitHub: {links.github || 'Not provided'}</li>
          <li>LinkedIn: {links.linkedin || 'Not provided'}</li>
          <li>Twitter: {links.twitter || 'Not provided'}</li>
        </ul>
      </div>
    </div>
  );
};

export default LinkSharingPortfolio;