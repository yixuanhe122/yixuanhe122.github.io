import React from 'react';
import './App.css';
import avatar from './assets/avatar.jpg'; // 使用require或import导入图片
import pic1 from './assets/chsnet.jpg';
import pic2 from './assets/pic2.jpg';
// import paper_pic_1 from './assets/avatar.png';
// import paper_pic_2 from './assets/avatar.png';
import img_github from './assets/github.svg';
import img_twitter from './assets/twitter.svg';
import img_csdn from './assets/csdn.svg';
import img_google_scholar from './assets/googleScholar.svg';


function App() {
  // 示例数据，你需要替换成自己的信息
  const personalInfo = {
    name: 'Yixuan He',
    contact: '19358590585',
    location: 'Ningbo, Zhejiang',
    school: 'Macau University of Science and Tethnology',
    github: 'https://github.com/xxx',
    twitter: 'https://twitter.com/xxx',
    csdn: 'https://blog.csdn.net/xxx',
    googleScholar: 'https://scholar.google.com/citations?user=xxx&hl=en',
    slogan: 'A butterfly seeking freedom and uniqueness.',

  };

  const educations = [
    'Grauted from Macau University of Science and Tethnology (Business Administration Master business school/Sep 2019 - Jun 2023)',
    'GPA : 3.00 / 4.00'
  ];

  const honors = [
    "Advanced Individual of the University (2021) Outstanding Cadre of the Student Union (2021)",
    'Served as a leader in the business competition organized by the university and achieved good results.'
  ];

  const academicAchievements = [
    {
      title: 'Accounting Finance @Ningbo Vanke Logistics, Jul 2023-Oct 2023',
      image: pic2,
      description: 'Mainly engaged in document review. bookkeeping. preparation of accounting vouchers. invoice and voucher filing and management. preparation and analvsis of financial statements. Expense accounting and accounts pavable. Contract review and other tasks assigned by superior.',
    },
    {
      title: 'Secretary School association @Mental health center, Mar 2020-Mar 2023 in Macao',
      image: pic1,
      description: 'During my three years in college. worked as a secretary in a mental health center. The busy secretarial work has trained my organizational skills and writing skills. Because I need to get the information one by one to tell other members. I make working ability has won the trust and support of teachers and studnets. At the same time, I have participated in and organized publicity activities and drama competitions organized by mental health Center for many times. All ahcieved very good results.',
    },

  ]

  const hobbies = [
    'Data analysis',
    'PowerPoint',
    'Excel',
    'Word',
  ];

  const Interests = [
    'Piano Grade 8',
    'CET-6',
  ];

  const Courses = [
    'Business Statistics (88)',
    'Accounting (93)',
  ]


  return (
    <div className='container w-full mx-auto'>
      <div class="flex flex-col md:flex-row gap-4">

        <div class="container basis-1/4 bg-gradient-to-b from-gray-200 rounded-xl flex-col space-y-8 p-4 max-w-sm mx-auto">
          <img  src={avatar} className="mx-auto rounded-3xl shadow-xl" />
          <div>
            <div className="text-2xl font-bold text-purple-400">{personalInfo.name}</div>
            <div className="text-md font-bold text-purple-300 mt-2">{'A butterfly seeking freedom and uniqueness'}</div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Basic Info</h2>
            <div>
              {/* <div>{personalInfo.school}</div> */}
              <div>{personalInfo.location}</div>
              <div>{personalInfo.contact}</div>
              <div className='flex flex-row justify-center mt-4'>
                <a href={personalInfo.googleScholar} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_google_scholar} alt='scholar'/></a>
                <a href={personalInfo.github} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_github} alt='github'/></a>
                <a href={personalInfo.twitter} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_twitter} alt='twitter'/></a>
                {/* <a href={personalInfo.csdn} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_csdn} alt='csdn'/></a> */}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Certifications</h2>
            <div className='grid grid-cols-2 gap-4'>
              {Interests.map((hobby, index) => (
                <div className="bg-slate-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div>
        
          <div>
            <h2 className="text-lg font-bold">Skills</h2>
            <div className='grid grid-cols-2 gap-4'>
              {hobbies.map((hobby, index) => (
                <div className="bg-zinc-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Courses</h2>
            <div className='grid grid-cols-2 gap-4'>
              {Courses.map((hobby, index) => (
                <div className=" bg-neutral-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div>

        </div>

        <div class="container basis-3/4 rounded-xl text-left p-4 space-y-12 bg-gradient-to-b from-purple-100">
          <section className="">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Education</h2>
            <li className='rounded-lg hover:bg-gradient-to-r from-primary'>{educations[0]}</li>
            <li className='rounded-lg hover:bg-gradient-to-r from-primary'>{educations[1]}</li>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Honors & aActivities</h2>
            {honors.map((award, index) => (
              <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
            ))}
          </section>


          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Experience</h2>
            <div className="grid grid-cols-1 gap-6">
              {academicAchievements.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div >
  );
}

export default App;
