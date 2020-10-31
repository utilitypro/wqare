import { Injectable } from '@angular/core';


import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  specialityList =  [
     {  id: 1,key:  "#SP001", speciality : 'Urologie',img : "assets/img/specialities/specialities-01.png" },
     {  id: 2,key:  "#SP002", speciality : 'Orthopedie',img : "assets/img/specialities/specialities-03.png" },
     {  id: 3,key:  "#SP003", speciality : 'Neurologie', img : "assets/img/specialities/specialities-02.png" },
     {  id: 4,key:  "#SP004", speciality : 'Cardiologie',img : "assets/img/specialities/specialities-04.png" },
     {  id: 5,key:  "#SP005", speciality : 'Dentiste',img:"assets/img/specialities/specialities-05.png" },
     
    ];

    let appointments = [
      {  id: 1,doctorName : "Dr. Ruby Mayindza",type:"Nouveau patient",speciality:"Chirurgie Dentaire",patient_key:"#PT001",Patient_Name:"Nzeguet Miyama Audrey",appointment_time:"Mercredi 27 Mai 2020 09:41:48 ",status : "active",amount:"20000.00 FCFA" },
      {  id: 2,doctorName : "Dr. Darren Nguema",type:"Nouveau patient",speciality:"Chirurgie Dentaire",patient_key:"#PT002",Patient_Name:"Travis Mayombo",appointment_time:"Mercredi 27 Mai 09:41:48 ",status : "active",amount:"30000.00 FCFA" },
      {  id: 3,doctorName : "Dr. Deborah Assoumou",type:"Ancien patient",speciality:"Cardiologie",patient_key:"#PT003",Patient_Name:"Carl Moussavou",appointment_time:"Mercredi 27 Mai  09:41:48 ",status : "active",amount:"150000.00 FCFA" },
      {  id: 4,doctorName : "Dr. Sofia ONDO ONDO",type:"Ancien patient",speciality:"Urologie",patient_key:"#PT004",Patient_Name:"Michelle Nzang",appointment_time:"Mercredi 27 Mai  09:41:48 ",status : "active",amount:"15000.00 FCFA" },
      {  id: 5,doctorName : "Dr. Marvin Tchibinda",type:"Nouveau patient",speciality:"Urologie",patient_key:"#PT005",Patient_Name:"Gina Maboundou",appointment_time:"Mercredi 27 Mai  09:41:48 ",status : "active",amount:"20000.00 FCFA" }
    ]

    let favourites = [
      {
        id : 1,
        doctor_name : "Dr. Ruby Mayindza",
        speciality : "Dentiste",
        since : "Mercredi 27 Mai 2020 09:41:48 ",
        Education : "MDS - Periodontologie et  Implantation Oral , BDS",
        Available : " Disponibilité Vendredi, 22 Mar ",
        Earned : "3100.00",
        Price : "160 FCFA",
        profile : "assets/img/doctors/doctor-thumb-01.jpg",
        status : "1",
        type : "Femme",
        location : "Libreville, Gabon",
        availableTime : "10 am",
        consulting_fees : "10000 FCFA",
        booking_fees : "100 FCFA",
        video_call : "15000 FCFA"
      },
      {
        id : 2,
        doctor_name : "Dr. Darren Nguema",
        speciality : "Chirurgien",
        since : "Vendredi 12 Mai 2020 09:41:48 ",
        Education : "BDS, MDS - Chirurgie buccale et maxillo-faciale",
        Available : " Disponiobilité Jeudi, 21 Mar ",
        Earned : "39000.00 FCFA",
        Price : "19000 FCFA",
        profile : "assets/img/doctors/doctor-thumb-02.jpg",
        status : "1",
        type : "Femme",
        location : "Libreville, Gabon",
        availableTime : "8 am",
        consulting_fees : "9000 FCFA",
        booking_fees : "10000 FCFA",
        video_call : "15000 FCFA"
      },
      {
        id : 3,
        doctor_name : "Dr. Deborah Assoumou",
        speciality : "Cardiologue",
        since : "Lundi 10 Oct 2020 09:41:48 ",
        Education : "MBBS, MD - Médecine Générale, DNB - Cardiologue",
        Available : " Disponibilité  Mercredi, 20 Mar ",
        Earned : "3700.00",
        Price : "17000 FCFA",
        profile : "assets/img/doctors/doctor-thumb-03.jpg",
        status : "1",
        type : "Femme",
        location : "Libreville, Gabon",
        availableTime : "2 pm",
        consulting_fees : "7000 FCFA",
        booking_fees : "10000 FCFA",
        video_call : "5000 FCFA"
      },
      {
        id : 4,
        doctor_name : "Dr. Sofia ONDO ONDO",
        speciality : "BDS, MDS - Chirurgie buccale et maxillo-faciale",
        since : "Mardi 27 Mai 2019 09:41:48 ",
        Education : "MBBS, MS - Chirurgie General, MCh - Urologie",
        Available : " Disponibilité vendredi, 22 Mar ",
        Earned : "30000.00 FCFA",
        Price : "11000 FCFA",
        profile : "assets/img/doctors/doctor-thumb-04.jpg",
        status : "1",
        type : "Femme",
        location : "Libreville, Gabon",
        availableTime : "11 am",
        consulting_fees : "11000 FCFA",
        booking_fees : "10000 FCFA",
        video_call : "15000 FCFA"
    },
    {
      id : 5,
      doctor_name : "Dr. Marvin  Tchibinda",
      speciality : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      since : "Mardi 27 Mai 2019 09:41:48 ",
      Education : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      Available : " Disponibilité Jeudi, 21 Mar ",
      Earned : "3150.00 FCFA",
      Price : "13000 FCFA",
      profile : "assets/img/doctors/doctor-thumb-05.jpg",
      status : "1",
      type : "Homme",
      location : "Libreville, Gabon",
      availableTime : "12 pm",
      consulting_fees : "8000 FCFA",
      booking_fees : "10000 FCFA",
      video_call : "5000 FCFA"
    },
    {
      id : 6,
      doctor_name : "Dr. Katharine Nzang",
      speciality : "Dentiste",
      since : "Mardi 26 Mai 2018 09:41:48 ",
      Education : "MS - Orthopédie, MBBS, M.Ch - Orthopédie",
      Available : " Disponibilité Jeudi, 21 Mar ",
      Earned : "29000.00 FCFA",
      Price : "18000 FCFA",
      profile : "assets/img/doctors/doctor-thumb-06.jpg",
      status : "1",
      type : "Femme",
      location : "Libreville, Gabon",
      availableTime : "7 am",
      consulting_fees : "17000 FCFA",
      booking_fees : "10000 FCFA",
      video_call : "15000 FCFA "
    },
    {
      id : 7,
      doctor_name : "Dr. Linda BIBAKA",
      speciality : "Dentiste",
      since : "Mercredi 27 Mai 2018 09:41:48 ",
      Education : "MBBS, MD - Medecine General, DM - Neurologie",
      Available : " Disponibilité Jeudi, 21 Mar ",
      Earned : "290000.00 FCFA",
      Price : "16000",
      profile : "assets/img/doctors/doctor-thumb-07.jpg",
      status : "1",
      type : "Femme",
      location : "Libreville, Gabon",
      availableTime : "10 pm",
      consulting_fees : "130000 FCFA",
      booking_fees : "1000 FCFA",
      video_call : "15000 FCFA"
    },
    {
      id : 8,
      doctor_name : "Dr. Julia Mouele",
      speciality : "Dentiste",
      since : "Lundi 25 Mai 2020 09:41:48 ",
      Education : "MBBS, MD - Medicine Générale , DM - Endocrinologie",
      Available : "  Disponibilité Mercredi, 20 Mar ",
      Earned : "320000.00 FCFA",
      Price : "14000 FCFA",
      profile : "assets/img/doctors/doctor-thumb-08.jpg",
      status : "1",
      type : "Femme",
      location : "Libreville, Gabon",
      availableTime : "9 am",
      consulting_fees : "9000 FCFA",
      booking_fees : "1000 FCFA",
      video_call : "15000 FCFA"
    },
    {
      id : 9,
      doctor_name : "Dr. Paul Mabicka",
      speciality : "Dentiste",
      since : "27 Mai 2020 09:41:48 ",
      Education : "MBBS, MD - Dermatologie , Venereologie & Lépros",
      Available : " Disponibilité Mercredi, 20 Mar ",
      Earned : "300000.00 FCFA",
      Price : "15000 FCFA",
      profile : "assets/img/doctors/doctor-thumb-09.jpg",
      status : "1",
      type : "Homme",
      location : "Libreville, Gabon",
      availableTime : "10 am",
      consulting_fees : "12000 FCFA",
      booking_fees : "1000 FCFA",
      video_call : "15000 FCFA"
    }
  ]

    let doctors = [
                {
            id : 1,
            doctor_name : "Dr. Darren Nguema",
			speciality : "Chirurgien",
			since : "Vendredi 12 Mai 2020 09:41:48 ",
			Education : "BDS, MDS - Chirurgie buccale et maxillo-faciale",
			Available : " Disponiobilité Jeudi, 21 Mar ",
			Earned : "39000.00 FCFA",
			Price : "19000 FCFA",
			profile : "assets/img/doctors/doctor-thumb-02.jpg",
			status : "1",
			type : "Femme",
			location : "Libreville, Gabon",
			availableTime : "8 am",
			consulting_fees : "9000 FCFA",
			booking_fees : "10000 FCFA",
			video_call : "15000 FCFA"
        },
        {
            id : 2,
            doctor_name : "Dr. Deborah Assoumou",
			speciality : "Cardiologue",
			since : "Lundi 10 Oct 2020 09:41:48 ",
			Education : "MBBS, MD - Médecine Générale, DNB - Cardiologue",
			Available : " Disponibilité  Mercredi, 20 Mar ",
			Earned : "3700.00",
			Price : "17000 FCFA",
			profile : "assets/img/doctors/doctor-thumb-03.jpg",
			status : "1",
			type : "Femme",
			location : "Libreville, Gabon",
			availableTime : "2 pm",
			consulting_fees : "7000 FCFA",
			booking_fees : "10000 FCFA",
			video_call : "5000 FCFA"
        },
        {
            id : 3,
            doctor_name : "Dr. John Bouanga",
            speciality : "Chirurgie Dentaire",
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Lundi 10 Oct 2020 09:41:48 ",
            Earned : "330000.00 FCFA",
            Education : "MBBS, MD - Médécine Générale , DNB - Cardiology",
            Available : " Disponibilité  Mardi, 19 Mar ",
            Price : "21000 FCFA",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-09.jpg",
            type : "Homme",
            location : "Libreville, Gabon",
            availableTime : "3 pm",
            consulting_fees : "15000 FCFA",
            booking_fees : "10000 FCFA",
            video_call : "15000 FCFa"
        },
        {
          id : 4,
          doctor_name : "Dr. Katharine Nzang",
		  speciality : "Dentiste",
		  since : "26 Mai 2018 09:41:48 ",
		  Education : "MS - Orthopédie, MBBS, M.Ch - Orthopédie",
		  Available : " Disponibilité Jeudi, 21 Mar ",
		  Earned : "29000.00 FCFA",
		  Price : "18000 FCFA",
		  profile : "assets/img/doctors/doctor-thumb-06.jpg",
		  status : "1",
		  type : "Femme",
		  location : "Libreville, Gabon",
		  availableTime : "7 am",
		  consulting_fees : "17000 FCFA",
		  booking_fees : "10000 FCFA",
		  video_call : "15000 FCFA "
        },
        {
          id:5,
          doctor_name : "Dr. Linda BIBAKA",
		  speciality : "Dentiste",
		  since : "Mercredi 27 Mai 2018 09:41:48 ",
		  Education : "MBBS, MD - Medecine General, DM - Neurologie",
		  Available : " Disponibilité Jeudi, 21 Mar ",
		  Earned : "290000.00 FCFA",
		  Price : "16000",
		  profile : "assets/img/doctors/doctor-thumb-07.jpg",
		  status : "1",
		  type : "Femme",
		  location : "Libreville, Gabon",
		  availableTime : "10 pm",
		  consulting_fees : "130000 FCFA",
		  booking_fees : "1000 FCFA",
		  video_call : "15000 FCFA"
        },
        {
          id:6,
          doctor_name : "Dr. Marvin  Tchibinda",
		  speciality : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
		  since : "Mardi 27 Mai 2019 09:41:48 ",
		  Education : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
		  Available : " Disponibilité Jeudi, 21 Mar ",
		  Earned : "3150.00 FCFA",
		  Price : "13000 FCFA",
		  profile : "assets/img/doctors/doctor-thumb-05.jpg",
		  status : "1",
		  type : "Homme",
		  location : "Libreville, Gabon",
		  availableTime : "12 pm",
		  consulting_fees : "8000 FCFA",
		  booking_fees : "10000 FCFA",
		  video_call : "5000 FCFA"
        },
        {
            id:7,
            doctor_name : "Dr. Olga Mamadou",
            speciality : "Médecine Dentaire",
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Mardi 27 Mai 2019 09:41:48  ",
            Earned : "370000.00 FCFA",
            Education : "MBBS, MD - Médecine Générale , DNB - Cardiologie",
            Available : " Disponibilité Samedi, 20 Fev ",
            Price : "26000 FCFA",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-10.jpg",
            type : "Homme",
            location : "Libreville, Gabon",
            availableTime : "11 am",
            consulting_fees : "20000 FCFA",
            booking_fees : "10000 FCFA",
            video_call : "15000 FCFA"
        },
         {
          id:8,
          doctor_name : "Dr. Paul Mabicka",
		  speciality : "Dentiste",
		  since : "27 Mai 2020 09:41:48 ",
		  Education : "MBBS, MD - Dermatologie , Venereologie & Lépros",
		  Available : " Disponibilité Mercredi, 20 Mar ",
		  Earned : "300000.00 FCFA",
		  Price : "15000 FCFA",
		  profile : "assets/img/doctors/doctor-thumb-09.jpg",
		  status : "1",
		  type : "Homme",
		  location : "Libreville, Gabon",
		  availableTime : "10 am",
		  consulting_fees : "12000 FCFA",
		  booking_fees : "1000 FCFA",
		  video_call : "15000 FCFA"
        },
        {
            id:9,
            doctor_name : "Dr. Ruby Mayindza",
			speciality : "Dentiste",
			since : "Mercredi 27 Mai 2020 09:41:48 ",
			Education : "MDS - Periodontologie et  Implantation Oral , BDS",
			Available : " Disponibilité Vendredi, 22 Mar ",
			Earned : "3100.00",
			Price : "160 FCFA",
			profile : "assets/img/doctors/doctor-thumb-01.jpg",
			status : "1",
			type : "Femme",
			location : "Libreville, Gabon",
			availableTime : "10 am",
			consulting_fees : "10000 FCFA",
			booking_fees : "100 FCFA",
			video_call : "15000 FCFA"
        },
        {
            id:9,
            doctor_name : "Dr. Sofia ONDO ONDO",
			speciality : "BDS, MDS - Chirurgie buccale et maxillo-faciale",
			since : "Mardi 27 Mai 2019 09:41:48 ",
			Education : "MBBS, MS - Chirurgie General, MCh - Urologie",
			Available : " Disponibilité vendredi, 22 Mar ",
			Earned : "30000.00 FCFA",
			Price : "11000 FCFA",
			profile : "assets/img/doctors/doctor-thumb-04.jpg",
			status : "1",
			type : "Femme",
			location : "Libreville, Gabon",
			availableTime : "11 am",
			consulting_fees : "11000 FCFA",
			booking_fees : "10000 FCFA",
			video_call : "15000 FCFA"
        }
    ]
 
    let patients = [
      {
            id : "1",
            key : "#P0016",
            name : "Richard MBOUBA",
            age : "38",
            address : "Lambaréné, Gabon",
            phone : "07286329170",
            email : "richardmbouba@example.com",
            lastvisit : "27 May 2020 09:41:48",
            paid : "10000.00 FCFA",
            bloodgroup : "AB+",
            type : "Homme",
            img : "assets/img/patients/patient.jpg"
        },
      {
            id : "2",
            key : "#PT001",
            name : "Nzeguet Miyama Audrey",
            age : "29",
            address : "Mouila, Gabon",
            phone : "	0620772999",
            email : "nzenguetmiyama@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "10000.00 FCFA",
            bloodgroup : "o+",
            type : "Femme",
            img : "assets/img/patients/patient1.jpg"
        },
        {
            id : "3",
            key : "#PT002",
            name : "Travis  Mayombo",
            age : "23",
            address : "Libreville, Gabon",
            phone : "0626072769",
            email : "travismayombo@example.com",
            lastvisit : "27 Mai 2020",
            paid : "25000.00 FCFA",
            bloodgroup : "B+",
            type : "Homme",
            img : "assets/img/patients/patient2.jpg"
        },
        {
            id : "4",
            key : "#PT003",
            name : "Carl Moussavou",
            age : "29",
            address : "Tchibanga, Gabon",
            phone : "0626072769",
            email : "carlmoussavou@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "20000.00 FCFA",
            bloodgroup : "A+",
            type : "Homme",
            img : "assets/img/patients/patient3.jpg"
        },
        {
            id : "5",
            key : "#PT004",
            name : "Michelle Nzang",
            age : "25",
            address : "Oyem, Gabon",
            phone : "0650436864",
            email : "michellenzang@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "15000.00 FCFA",
            bloodgroup : "B+",
            type : "Homme",
            img : "assets/img/patients/patient4.jpg"
        },
        {
             id : "6",
            key : "#PT005",
            name : "Gina Maboundou",
            age : "23",
            address : "Fougamou, Gabon",
            phone : "07454820788",
            email : "ginamaboundou@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "35000.00 FCFA",
            bloodgroup : "o-",
            type : "Homme",
            img : "assets/img/patients/patient5.jpg"
        },
         {
             id : "7",
            key : "#PT006",
            name : "Elsie Bie",
            age : "16",
            address : "Bitam, Gabon",
            phone : "0750436864",
            email : "Elsiebie@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "35000.00 FCFA",
            bloodgroup : "o-",
            type : "Homme",
            img : "assets/img/patients/patient6.jpg"
        },
        {
             id : "8",
            key : "#PT007",
            name : "Joan Mvella",
            age : "25",
            address : "Bitam, Gabon",
            phone : "9548207887",
            email : "joanmvella@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "35000.00 FCFA",
            bloodgroup : "o-",
            type : "Homme",
            img : "assets/img/patients/patient7.jpg"
        },
        {
             id : "9",
            key : "#PT008",
            name : "Daniel Koumba",
            age : "21",
            address : "Ntoum, Gabon",
            phone : "9548207887",
            email : "danielkoumba@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "35000.00 FCFA",
            bloodgroup : "o-",
            type : "Homme",
            img : "assets/img/patients/patient8.jpg"
        },
        {
             id : "10",
            key : "#PT009",
            name : "Walter Mbina",
            age : "18",
            address : "Bikele, Gabon",
            phone : "9548207887",
            email : "waltermbina@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "35000.00 FCFA",
            bloodgroup : "o-",
            type : "Homme",
            img : "assets/img/patients/patient9.jpg"
        },
        {
             id : "11",
            key : "#PT010",
            name : "Robert Bouanga",
            age : "19",
            address : "California, USA",
            phone : "9548207887",
            email : "robertbouanga@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "35000.00 FCFA",
            bloodgroup : "o-",
            type : "Homme",
            img : "assets/img/patients/patient10.jpg"
        }   ,
        {
             id : "12",
            key : "#PT0011",
            name : "Harry Nzogue",
            age : "9",
            address : "Kango, Gabon",
            phone : "1 303 607 7075",
            email : "harrynzogues@example.com",
            lastvisit : "Mercredi 27 Mai 2020  09:41:48 ",
            paid : "35000.00 FCFA",
            bloodgroup : "A-",
            type : "Homme",
            img : "assets/img/patients/patient11.jpg"
        }        
    ]

    let reviews = [
      {
         id : 1,
         patient_name : "Michelle Nzang",
         doctor_name : "Dr. Sofia ONDO ONDO",
         patient_pic : "assets/img/patients/patient4.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg",
         ratings : "5",
         description : "Très bonne j'ai pu être rassuré sur mon état de santé",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
         id : 2,
         patient_name : "Carl Moussavou",
         doctor_name : "Dr. Deborah Assoumou",
         patient_pic : "assets/img/patients/patient3.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg",
         ratings : "4",
         description : "",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
         id : 3,
         patient_name : "Nzeguet Miyama Audrey",
         doctor_name : "Dr. Ruby Mayindza",
         patient_pic : "assets/img/patients/patient1.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg",
         ratings : "4",
         description : "Consulation vidéo de qualité comme si j'étais au cabinet",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
         id : 4,
         patient_name : "Daniel Koumba",
         doctor_name : "Dr. Paul Mabicka",
         patient_pic : "assets/img/patients/patient8.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg",
         ratings : "4",
         description : "Médécin à l'écoute et très precis dans son diagnostique",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
          id : 5,
         patient_name : "Elsie Bie",
         doctor_name : "Dr. Katharine Nzang",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/patients/patient6.jpg",
         ratings : "3",
         description : "Un peu trop d'attente mais satisfait une fois reçu",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
          id : 6,
         patient_name : "Elsie Bie",
         doctor_name : "Dr. Katharine Nzang",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/patients/patient6.jpg",
         ratings : "3",
         description : "Pécise et transparente",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
          id : 7,
         patient_name : "Gina Maboundou",
         doctor_name : "Dr. Marvin  Tchibinda",
         patient_pic : "assets/img/patients/patient5.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg",
         ratings : "3",
         description : "J'ai obtenu un rendez-vous en téléconsultation dans les 5 min suivant ma demande, réponse rapide, très bon médecin et réception des documents dès la fin de l’appel. Et tout ça un dimanche en fin d’après-midi!",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
          id : 8,
         patient_name : "Harry Nzogue",
         doctor_name : "Dr. Olga Mamadou",
         patient_pic : "assets/img/patients/patient10.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg",
         ratings : "3",
         description : "Rassurante et Accueillante",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
          id : 9,
         patient_name : "Joan Mvella",
         doctor_name : "Dr. Linda Tobin",
         patient_pic : "assets/img/patients/patient7.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg",
         ratings : "3",
         description : "J'étais sceptique sur le principe de consultation a distance, mais j'ai été agréablement étonné, docteur souriant, compétent qui prend le temps d'expliquer la situation",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      },
      {
          id : 10,
         patient_name : "Travis Mayombo",
         doctor_name : "Dr. Darren Nguema",
         patient_pic : "assets/img/patients/patient2.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg",
         ratings : "3",
         description : "Très surprise par la qualité de ce service, très pratique et efficace, le Docteur P. est à l’écoute et a vite posé un diagnostic, les documents sont arrivés rapidement par email à la suite de la consultation. Je recommande vivement.",
         date : "Mercredi 27 Mai 2020  09:41:48 "
      }
  ]

  let comments = [

    {
      "name" : "Michelle Nzang",
      "email" : "Nzang@example.com",
      "comment" : "Conseil et écoute de qualité, je recommande"
    },
    {
      "name" : "Elsie Bie",
      "email" : "Nzang@example.com",
      "comment" : "Je suis très satisfaite de la prestation et de l'accompagnement tout au long du processus"
    }

  ]

  let blogs = [
  {
    id : 1,
    title : "WQare – Simplifier vos visite en clinique?",
    description : "Trouvez rapidement un spécialiste près de chez vous et prenez rendez-vous gratuitement en ligne en quelques clics.",
    createdBy : "Dr. Deborah Assoumou",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces santé",
    status : "active",
    img : "assets/img/blog/blog-01.jpg",
    doctor_name : "Dr. Ruby Mayindza",
    doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"

  },
  {
    id : 2,
    title : "Pourquoi prendre rendez-vous avec un praticiens en ligne?",
    description : "Nous vous expliquons simplement les raison de reserver un rendez-vous via notre application avec un praticien",
    createdBy : "Dr. Deborah Assoumou",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-02.jpg",
    doctor_name : "Dr. Darren Nguema",
    doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg"
  },
  {
    id : 3,
    title : "Avantages de consulter un médecin en ligne",
    description : "Pourquoi la consultation en ligne prends de plus en plus de place et quels  en sont les avantages? pour en savoir plus lisez ce articles",
    createdBy : "Dr. Deborah Assoumou",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-03.jpg",
    doctor_name : "Dr. Deborah Assoumou",
    doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg"
  },
  {
    id : 4,
    title : "5 bonnes raisons d'utiliser un médecin en ligne",
    description : "Sofia Vous resume en 5 points les avantages d'une consultation vidéo avec praticiens",
    createdBy : "Dr. Sofia ONDO ONDO",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-04.jpg",
    doctor_name : "Dr. Sofia ONDO ONDO",
    doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg"
  },
  {
    id : 5,
    title : "Planification de rendez-vous chez le médecin en ligne",
    description : "Cet article va vous expliquer de manière comment planifier un suivi médicale en ligne de manière simple",
    createdBy : "Dr. Sofia ONDO ONDO",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-05.jpg",
    doctor_name : "Dr. Marvin  Tchibinda",
    doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg"
  },
  {
    id : 6,
    title : "Des étapes simples pour rendre vos visites chez le médecin exceptionnelles!",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia ONDO ONDO",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-06.jpg",
    doctor_name : "Dr. Katharine Nzang",
    doctor_pic : "assets/img/doctors/doctor-thumb-06.jpg"
  },
  {
    id : 7,
    title : "Choisissez votre propre rendez-vous de médecin en ligne",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia ONDO ONDO",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-07.jpg",
    doctor_name : "Dr. Linda Tobin",
    doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg"
  },
  {
    id : 8,
    title : "Des étapes simples pour consulter votre médecin aujourd'hui",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia ONDO ONDO",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-08.jpg",
    doctor_name : "Dr. Paul Richard ",
    doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg"
  },
   {
    id : 9,
    title : "5 bonnes raisons d'utiliser un médecin en ligne",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia ONDO ONDO",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-09.jpg",
    doctor_name : "Dr. John Gibbs ",
    doctor_pic : "assets/img/doctors/doctor-thumb-09.jpg"
  },
   {
    id : 10,
    title : "Programmes de doctorat en ligne",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia ONDO ONDO",
    createdAt : "Mercredi 27 Mai 2020  09:41:48 ",
    comments : 12,
    type : "Astuces Santé",
    status : "active",
    img : "assets/img/blog/blog-10.jpg",
    doctor_name : "Dr. Olga Mamadou",
    doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg"
  }
] 

  let transactions = [
      {
        id : 1,
        invoiceNumber  : '#IN0001',
        patient_id : '#PT001',
        patient_name : 'Daniel Koumba',
        profile : 'assets/img/patients/patient8.jpg',
        total_amount : '15000.00 FCFA',
        status : 'payé'
      },
      {
        id : 2,
          invoiceNumber  : '#IN0002',
          patient_id : '#PT007',
          patient_name : 'Joan Mvella',
          profile : 'assets/img/patients/patient7.jpg',
          total_amount : '25000.00 FCFA',
          status : 'payé'
      },
      {
        id : 3,
          invoiceNumber  : '#IN0003',
          patient_id : '#PT004',
          patient_name : 'Michelle Nzang',
          profile : 'assets/img/patients/patient4.jpg',
          total_amount : '15000.00 FCFA',
          status : 'payé'
      },
      {
        id : 4,
          invoiceNumber  : '#IN0004',
          patient_id : '#PT003',
          patient_name : 'Carl Moussavou',
          profile : 'assets/img/patients/patient3.jpg',
          total_amount : '15000.00 FCFA',
          status : 'payé'
      },
      {
        id : 5,
          invoiceNumber  : '#IN0005',
          patient_id : '#PT001',
          patient_name : 'Elsie Bie',
          profile : 'assets/img/patients/patient8.jpg',
          total_amount : '30000.00 FCFA',
          status : 'payé'
      },
      {
        id : 6,
          invoiceNumber  : '#IN0006',
          patient_id : '#PT005',
          patient_name : 'Gina Maboundou',
          profile : 'assets/img/patients/patient5.jpg',
          total_amount : '35000.00 FCFA',
          status : 'payé'
      },
      {
        id : 7,
          invoiceNumber  : '#IN0007',
          patient_id : '#PT010',
          patient_name : 'Robert Rhodes',
          profile : 'assets/img/patients/patient10.jpg',
          total_amount : '$120.00',
          status : 'payé'
      },
      {
        id : 8,
          invoiceNumber  : '#IN0008',
          patient_id : '#PT002',
          patient_name : 'Travis Mayombo',
          profile : 'assets/img/patients/patient10.jpg',
          total_amount : '20000.00 FCFA',
          status : 'payé'
      },
      {
        id : 9,
          invoiceNumber  : '#IN0009',
          patient_id : '#PT009',
          patient_name : 'Walter Roberson',
          profile : 'assets/img/patients/patient9.jpg',
          total_amount : '10000.00 FCFA',
          status : 'payé'
      }
  ]
    return {transactions:transactions,comments:comments,favourites:favourites,blogs:blogs,specialityList:specialityList,appointments:appointments,doctors:doctors,patients:patients,reviews:reviews};
 
   }
}
