"use client"
import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Metadata } from 'next';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    image: '79.jpg',
    bio: 'John is a visionary leader with over 15 years of experience in the tech industry.',
    email: 'john@example.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    image: '22.jpg',
    bio: 'Jane is a brilliant technologist who has led numerous successful product launches.',
    email: 'jane@example.com',
    linkedin: 'https://linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Lead Designer',
    image: '17.jpg',
    bio: 'Mike is a creative genius with an eye for detail and a passion for user-centric design.',
    email: 'mike@example.com',
    linkedin: 'https://linkedin.com/in/mikejohnson',
    twitter: 'https://twitter.com/mikejohnson'
  },
  {
    id: 4,
    name: 'Sarah Lee',
    role: 'Marketing Director',
    image: '78.jpg',
    bio: 'Sarah is a marketing maverick who has helped grow our brand exponentially.',
    email: 'sarah@example.com',
    linkedin: 'https://linkedin.com/in/sarahlee',
    twitter: 'https://twitter.com/sarahlee'
  }
];

const TeamMember: React.FC<{ member: typeof teamMembers[number]; onClick: (member: typeof teamMembers[number]) => void }> = ({ member, onClick }) => (

  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
    onClick={() => onClick(member)}
    tabIndex={0}
    role="button"
    aria-label={`View details for ${member.name}`}
    onKeyPress={(e) => e.key === 'Enter' && onClick(member)}
  >
    <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
    </div>
  </motion.div>
);

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; member: typeof teamMembers[number] }> = ({ isOpen, onClose, member }) => (

  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-lg p-8 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
          <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
          <h2 id="modal-title" className="text-2xl font-bold mb-2 text-center">{member.name}</h2>
          <p className="text-gray-600 text-center mb-4">{member.role}</p>
          <p className="text-gray-700 mb-4">{member.bio}</p>
          <div className="flex justify-center space-x-4">
            <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} className="text-blue-500 hover:text-blue-700">
              <FaEnvelope size={24} />
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn profile`} className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={24} />
            </a>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Twitter profile`} className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member: React.SetStateAction<null>) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
<TeamMember key={member.id} member={member} onClick={(m) => handleCardClick(m)} />

          ))}
        </div>
<Modal isOpen={Boolean(selectedMember)} onClose={handleCloseModal} member={selectedMember!} />

      </div>
    </section>
  );
};

export default TeamSection;