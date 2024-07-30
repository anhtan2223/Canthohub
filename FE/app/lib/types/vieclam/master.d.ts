import {Id , SearchPaging} from "@type/master"
import { Career } from "@type/vieclam/career"
import { Level } from "@type/vieclam/level"
import { Form } from "@type/vieclam/Form"
import { Address } from "@type/master/address"


export interface JobFilter extends SearchPaging {
    carrer? : Career
    level? : Level[]
    address? : Address[]
    form? : Form[]
    salary_from? : number
    salary_to? : number
}

interface GetJobRequest extends SearchPaging {
    carrer_id? : number[]
    experiment_id? : number[]
    level? : Level[] 
    form? : Form[]
    salary_range? : { from? :number , to? :number }
}

interface JobCard {
    
}

export interface JobInfo extends Id{
    title: string;
    company: string;
    company_logo: string;
    address: string;
    career: string;
    level: string;
    form: string;
    salary: string;
    experience: string;
    user_upload: string;
    avatar: string;
    quantity: number;
    apply_from: string;
    apply_to: string;
}

export interface JobPost extends Id {
  company_name : string
  company_cover_image : File
  quantity : number
  job_description: string
  requirement : string
  benefits : string 
  jd_file : File
  salary_from : number
  salary_to : number
  address : Address
  career : Career
  experience : Experience
  level : Level
  form : Form
}



