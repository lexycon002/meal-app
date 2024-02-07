import { MdOutlinePhoneAndroid } from "react-icons/md";
<MdOutlinePhoneAndroid />
import { FaLocationDot } from "react-icons/fa6";
<FaLocationDot />
import { MdEmail } from "react-icons/md";
<MdEmail />
import { FaTruck } from "react-icons/fa6";
<FaTruck />
import { FaDollarSign } from "react-icons/fa6";
<FaDollarSign />
import { FaLifeRing } from "react-icons/fa6";
<FaLifeRing />
import { BiSolidQuoteLeft } from "react-icons/bi";
<BiSolidQuoteLeft />

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://webknox-recipes.p.rapidapi.com/recipes/156992/similar',
  headers: {
    'X-RapidAPI-Key': '5933b91fb7mshbe3251d3be1dee6p149982jsn80f7ca5ae827',
    'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
