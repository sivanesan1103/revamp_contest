import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    rating: '4.5',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    rating: '4.7',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    rating: '4.3',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

function TopInstructors () {
  return (
    <div className="py-12 m-10 bg-gray-100 rounded-lg">
      <div className="max-w-5xl px-4 mx-auto text-center sm:px-6 lg:px-8">

        <h2 className="text-3xl font-extrabold text-gray-900">Top Instructors</h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Meet the passionate individuals behind our success.</p>

        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <img
                className="object-cover w-full h-48"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-left text-gray-900">{member.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="mt-2 text-gray-600">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.rating}⭐</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
