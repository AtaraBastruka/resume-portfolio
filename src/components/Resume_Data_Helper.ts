interface Resume {
    basics:       Basics;
    work:         Experience[];
    education:    Education[];
    certificates: Certificate[];
    publications: Publication[];
    skills:       Skill[];
    references:   Reference[];
    projects:     Project[];
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
    date:   string;
    issuer: string;
    url:    string;
}

interface Education {
    institution: string;
    url:         string;
    area:        string;
    startDate:   string;
    endDate:     string;
}

interface Project {
    name:        string;
    startDate:   string;
    endDate:     string;
    description: string;
    highlights:  string[];
    url:         string;
}

interface Publication {
    name:        string;
    publisher:   string;
    releaseDate: string;
    url:         string;
    summary:     string;
}

interface Reference {
    name:      string;
    company:  string;
    position: string;
    phone:    string;
}

interface Skill {
    name:     string;
    level:    string;
}

interface Experience {
    organization?: string;
    position:      string;
    url:           string;
    type:          string;
    startDate:     string;
    endDate:       string;
    summary:       string;
    highlights:    string[];
    name?:         string;
}


//Importing the JSON file
import json from '../data/resume.json';
const resume: Resume = json;

export default resume;


