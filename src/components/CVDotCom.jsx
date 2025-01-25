import { useState } from 'react';
import '../App.css';
import Header from './Header';
import CardTemplate from './CardTemplate';
import Input from './Input';
import Mail from '../../public/mail.svg';
import Phone from '../../public/phone.svg';
import Address from '../../public/address.svg';


function CvDotCom() {
    const [inputs, setInputs] = useState(
        {
            name: "Jhon Doe",
            email: "jhon@doe.com",
            phone: "123456789",
            address: "123 Main St, City, Country",
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod amet amet amet amet amet amet.",
            schoolName: "School Name",
            startSchoolDate: "2025-01-01",
            endSchoolDate: "2025-01-01",
            companyName: "Company Name",
            companyDate: "2025-01-01",
            endCompanyDate: "2025-01-01",
        },
    );
    const [pfp, setPfp] = useState(null);
    const [schoolSections, setSchoolSections] = useState([
        {
            id: 0,
            schoolName: "School Name",
            startSchoolDate: "2025-01-01",
            endSchoolDate: "2025-01-01",
        }
    ]);
    const [workSections, setWorkSections] = useState([
        {
            id: 0,
            companyName: "Company Name",
            companyDate: "2025-01-01",
            endCompanyDate: "2025-01-01",
        }
    ]);

    const handlePfp = (e) => [
        setPfp(URL.createObjectURL(e.target.files[0]))
    ]

    const handleChange = (e) => {
        setInputs(prevInputs => ({
            ...prevInputs,
            [e.target.id]: e.target.value
        }));
    }

    const handleSchoolChange = (e, id) => {
        setSchoolSections(prevSections => 
            prevSections.map(section => 
                section.id === id 
                    ? { ...section, [e.target.id]: e.target.value }
                    : section
            )
        );
    }

    const handleAddSchoolInfo = () => {
        setSchoolSections(prevSections => [
            ...prevSections,
            {
                id: prevSections.length,
                schoolName: "New School Name",
                startSchoolDate: "2025-01-01",
                endSchoolDate: "2025-01-01",
            }
        ]);
    }

    const handleAddWorkInfo = () => {
        setWorkSections(prevSections => [
            ...prevSections,
            {
                id: prevSections.length,
                companyName: "New Company Name",
                companyDate: "2025-01-01",
                endCompanyDate: "2025-01-01",
            }
        ]);
    }

    const handleWorkChange = (e, id) => {
        setWorkSections(prevSections => 
            prevSections.map(section => 
                section.id === id 
                    ? { ...section, [e.target.id]: e.target.value }
                    : section
            )
        );
    }

    const handleCloseSchoolInfo = (id) => {
        setSchoolSections(prevSections => prevSections.filter(section => section.id !== id));
    }

    const handleCloseWorkInfo = (id) => {
        setWorkSections(prevSections => prevSections.filter(section => section.id !== id));
    }

    return (
        <>
            <Header />
        <main>

            {/* INFO: This is the inputs section */}
            <section className="inputs-section">

                    {/* INFO: This is the general information section */}
                    <CardTemplate title="General Information">
                        <Input type="text" id="name" placeholder={inputs.name} value={inputs.name} label="Name and Last Name" maxLength={30} handleChange={handleChange}/>
                        <Input type="email" id="email" placeholder={inputs.email} value={inputs.email} label="Email" handleChange={handleChange}/>
                        <Input type="number" id="phone" placeholder={inputs.phone} value={inputs.phone} label="Phone Number" handleChange={handleChange}/>
                        <Input type="text" id="address" placeholder={inputs.address} value={inputs.address} label="Address" handleChange={handleChange} maxLength={30}/>
                        <div className="input">
                            <label htmlFor="aboutMe">About Me</label>
                            <textarea id="aboutMe" placeholder={inputs.aboutMe} value={inputs.aboutMe} label="About Me" onChange={handleChange} maxLength={350}/>
                        </div>
                        <Input type="file" id="pfp" placeholder={inputs.pfp} value={inputs.pfp} label="Profile Picture" handleChange={handlePfp}/>
                    </CardTemplate>

                    {/* INFO: This is the school information section */}
                    {schoolSections.map((section) => (
                        <CardTemplate key={section.id} title="School Information" handleClose={() => handleCloseSchoolInfo(section.id)}>
                            <Input 
                                type="text" 
                                id="schoolName" 
                                placeholder="School Name" 
                                value={section.schoolName} 
                                label="School Name" 
                                handleChange={(e) => handleSchoolChange(e, section.id)}
                            />
                            <Input 
                                type="date" 
                                id="startSchoolDate" 
                                value={section.startSchoolDate} 
                                label="Start Date" 
                                handleChange={(e) => handleSchoolChange(e, section.id)}
                            />
                            <Input 
                                type="date" 
                                id="endSchoolDate" 
                                value={section.endSchoolDate} 
                                label="End Date" 
                                handleChange={(e) => handleSchoolChange(e, section.id)}
                            />
                        </CardTemplate>
                    ))}
                    <button onClick={handleAddSchoolInfo}>Add More Education Info</button>

                    {/* INFO: This is the work experience section */}
                    {workSections.map((section) => (
                        <CardTemplate key={section.id} title="Work Experience" handleClose={() => handleCloseWorkInfo(section.id)}>
                            <Input
                                type="text"
                                id="companyName"
                                placeholder="Company Name"
                                value={section.companyName}
                                label="Company Name" 
                                handleChange={(e) => handleWorkChange(e, section.id)}
                            />
                            <Input
                                type="date"
                                id="companyDate"
                                value={section.companyDate}
                                label="Start Date"
                                handleChange={(e) => handleWorkChange(e, section.id)}
                            />
                            <Input
                                type="date"
                                id="endCompanyDate"
                                value={section.endCompanyDate}
                                label="End Date"
                                handleChange={(e) => handleWorkChange(e, section.id)}
                            />
                        </CardTemplate>
                    ))}
                    <button onClick={handleAddWorkInfo}>Add More Work Info</button>
                </section>

                {/* INFO: This is the preview section */}
                <section className="preview-section">
                    <div className="preview-container">
                        <div className="preview-header">
                            <div className="pfp-preview">
                                <img
                                src={pfp} 
                                alt=""
                                />
                            </div>
                            <div className="preview-header-text">
                                <h2 className='preview-header-text-name'>{inputs.name}</h2>
                                <h4 className="preview-header-text-email"><img src={Mail} alt="mail" />{inputs.email}</h4>
                                <h4 className="preview-header-text-phone"><img src={Phone} alt="phone" />{inputs.phone}</h4>
                                <h4 className="preview-header-text-address"><img src={Address} alt="address" />{inputs.address}</h4>
                            </div>
                        </div>
                        <div className="preview-body">
                            <div className="preview-body-decoration"></div>
                            <div className="preview-body-container">
                                <div className="preview-body-about">
                                    <ul>
                                        <li><h3>About Me</h3></li>
                                        <p>{inputs.aboutMe}</p>
                                    </ul>
                                </div>
                                <div className="preview-body-school">
                                    <ul>
                                        <li><h3>Education Information</h3></li>
                                        {schoolSections.map((section) => (
                                            <div key={section.id} className="preview-body-school-info">
                                                <h4>{section.schoolName}</h4>
                                                <h5>{section.startSchoolDate} / {section.endSchoolDate}</h5>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                                <div className="preview-body-work">
                                    <ul>
                                        <div className="preview-body-work-info">
                                            <li><h3>Work Experience</h3></li>
                                            {workSections.map((section) => (
                                                <div key={section.id} className="preview-body-work-info">
                                                    <h4>{section.companyName}</h4>
                                                    <h5>{section.companyDate} / {section.endCompanyDate}</h5>
                                                </div>
                                            ))}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default CvDotCom;