interface Resume {
    basics:       Basics;
    work:         Experience[];
    education:    Education[];
    awards:       Award[];
    certificates: Certificate[];
    publications: Publication[];
    skills:       Skill[];
    languages:    Language[];
    interests:    Interest[];
    references:   Reference[];
    projects:     Project[];
}

interface Award {
    title:   string;
    date:    Date;
    awarder: string;
    summary: string;
}

interface Basics {
    name:     string;
    label:    string;
    image:    string;
    url:      string;
    summary:  string;
    location: Location;
    contact: Contact[];
}

interface Location {
    address:     string;
    postalCode:  string;
    city:        string;
    countryCode: string;
    region:      string;
}

interface Contact {
    network:  string;
    username: string;
    icon:     string;
    url:      string;
}

interface Certificate {
    name:   string;
    date:   Date;
    issuer: string;
    url:    string;
}

interface Education {
    institution: string;
    url:         string;
    area:        string;
    studyType:   string;
    startDate:   Date;
    endDate:     Date;
    score:       string;
    courses:     string[];
}

interface Interest {
    name:     string;
    keywords: string[];
}

interface Language {
    language: string;
    fluency:  string;
}

interface Project {
    name:        string;
    startDate:   Date;
    endDate:     Date;
    description: string;
    highlights:  string[];
    url:         string;
}

interface Publication {
    name:        string;
    publisher:   string;
    releaseDate: Date;
    url:         string;
    summary:     string;
}

interface Reference {
    name:      string;
    reference: string;
}

interface Skill {
    name:     string;
    level:    string;
    keywords: string[];
}

interface Experience {
    organization?: string;
    position:      string;
    url:           string;
    startDate:     Date;
    endDate:       Date;
    summary:       string;
    highlights:    string[];
    name?:         string;
}

//Importing the JSON file
const json = require('../data/resume.json');
const resume: Resume = json;

export default resume;