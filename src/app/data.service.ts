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
        speciality_profile : 'assets/img/specialities/icon-dentist.png',
        since : "Vendredi 12 Mai 2020 09:41:48 ",
        Education : "BDS, MDS - Chirurgie buccale et maxillo-faciale",
        Available : " Disponiobilité Jeudi, 21 Mar ",
        Earned : "39000.00 FCFA",
        Price : "19000 FCFA",
        profile : "assets/img/doctors/doctor-thumb-01.png",
        status : "1",
        type : "Femme",
        location : "Libreville, Gabon",
        availableTime : "8 am",
        consulting_fees : "9000 FCFA",
        booking_fees : "10000 FCFA",
        services: ['implants', 'blanchiment'],
        video_call : "15000 FCFA"
      },
      {
        id : 2,
        doctor_name : "Dr. Deborah Assoumou",
        speciality : "Cardiologue",
        speciality_profile : 'assets/img/specialities/heart.png',
        since : "Lundi 10 Oct 2020 09:41:48 ",
        Education : "MBBS, MD - Médecine Générale, DNB - Cardiologue",
        Available : " Disponibilité  Mercredi, 20 Mar ",
        Earned : "3700.00",
        Price : "17000 FCFA",
        profile : "assets/img/doctors/h_cardio.png",//assets/img/doctors/doctor-thumb-03
        status : "1",
        type : "Femme",
        location : "Libreville, Gabon",
        availableTime : "2 pm",
        consulting_fees : "7000 FCFA",
        booking_fees : "10000 FCFA",
        services: ['chirurgie', 'urgence', 'pediatrie'],
        video_call : "5000 FCFA"
      },
      {
        id : 3,
        doctor_name : "Dr. John Bouanga",
        speciality : "Chirurgie Dentaire",
        speciality_profile : 'assets/img/specialities/icon-orthopedic.png',
        since : "Lundi 10 Oct 2020 09:41:48 ",
        Earned : "330000.00 FCFA",
        Education : "MBBS, MD - Médécine Générale , DNB - Cardiology",
        Available : " Disponibilité  Mardi, 19 Mar ",
        Price : "21000 FCFA",
        status : "1",
        profile : "assets/img/doctors/doctor-thumb-03.png",
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
        speciality_profile : 'assets/img/specialities/icon-orthopedic.png',
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
        "comment" : "Conseil et écoute de qualité, je recommande",
        "date": "22-08-2021 17:17",
        "article-id": 1
      },
      {
        "name" : "Elsie Bie",
        "email" : "Nzang@example.com",
        "comment" : "Je suis très satisfaite de la prestation et de l'accompagnement tout au long du processus",
        "date": "22-08-2021 17:18",
        "article-id": 2
      },
      {
        "name" : "Michelle Nzang",
        "email" : "Nzang@example.com",
        "comment" : "Conseil et écoute de qualité, je recommande",
        "date": "22-08-2021 17:17",
        "article-id": 3
      },
      {
        "name" : "Elsie Bie",
        "email" : "Nzang@example.com",
        "comment" : "Je suis très satisfaite de la prestation et de l'accompagnement tout au long du processus",
        "date": "22-08-2021 17:18",
        "article-id": 4
      }

    ]

    let blogs = [
      {
        id : 1,
        title : "Qu'est-ce que le diabète ?",
        description : "Une vidéo  pour comprendre le diabète : causes, symptômes, traitements, facteurs de risques, dépistage. Le diabète se caractérise par un excès de sucre dans le sang (hyperglycémie chronique ) et donc un taux de glucose (glycémie) trop élevé. On distingue le diabète de type 1 (insulinodépendant) et le diabète de type 2.",
        createdBy : "Fédération Française des Diabétiques",
        createdAt : "11-03-2021 18:30",
        comments : 0,
        type : "Diabète",
        status : "active",
        url: "https://www.youtube.com/watch?v=PkHwH-kBn5I&t=6s",
        img : "https://i.ytimg.com/vi/PkHwH-kBn5I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPF0hmguRJ-okGD0YdCOuHCv9GIA",
        doctor_pic: "https://yt3.ggpht.com/ytc/AKedOLQi_hPn_Ov6KH-JY7K9V68T49XKbtyqaCVOnHwCWw=s88-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 2,
        title : "C'est quoi le paludisme ?",
        description : "C'est quoi le paludisme ? - 1 jour, 1 question propose de répondre chaque jour à une question d'enfant, en une minute et trente secondes. Le commentaire explicatif est toujours drôle, le dessin est léger et espiègle.",
        createdBy : "1 jour, 1 question",
        createdAt : "11-03-2021 18:00",
        comments : 0,
        type : "Paludisme",
        status : "active",
        url: "https://www.youtube.com/watch?v=aEetL3XdasU&t=1s",
        img : "https://i.ytimg.com/vi/aEetL3XdasU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKAskiDma3kgGNazfxVFF4r3akyw",
        doctor_pic : "https://yt3.ggpht.com/ytc/AKedOLQfhU2ja4ShdbkrslKUy-K0_zIO5OtkRGP06hdh=s88-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 3,
        title : "Qu'est ce qu'une maladie cardio-vasculaire ?",
        description : "Découvrez comment Sébastien Payet aborde sérieusement, mais avec une touche d’humour la question des maladies cardio-vasculaires.",
        createdBy : "MA SANTÉ RE",
        createdAt : "11-03-2021 18:15",
        comments : 0,
        type : "Cardio-vasculaire",
        status : "active",
        url: "https://www.youtube.com/watch?v=ECK2TVtV_6M",
        img : "https://i.ytimg.com/vi/ECK2TVtV_6M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOgD7PDuYa0naE5OjTD9vdqsYMqw",
        doctor_pic : "https://yt3.ggpht.com/ytc/AKedOLRPAU6JP1AaGk1Z8qs17fZ3uxp4q1aoz6frX8mnLQ=s68-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 4,
        title : "Covid-19: pourquoi l’Afrique résiste mieux que les autres",
        description : "L’Afrique compte moins de 2% des cas de Covid-19. Démographie, climat, modes de vie: plusieurs facteurs expliquent pourquoi le continent reste, pour l’instant, relativement épargné. Notre décryptage.",
        createdBy : "Le Temps",
        createdAt : "11-03-2021 18:25",
        comments : 0,
        type : "Covid-19",
        status : "active",
        url: "https://www.youtube.com/watch?v=lsiaGOAduwM",
        img : "https://i.ytimg.com/vi/lsiaGOAduwM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFGyb8iUzrBQ8iq0aj0HoE5x8Fkw",
        doctor_pic : "https://yt3.ggpht.com/ytc/AKedOLSjCuLj7CvOrZBVgIHIGfAiZUX0bXxwBGsUdH1rKg=s88-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 5,
        title : "Prévenir le diabète - 2 minutes pour comprendre",
        description : "Prévenir le diabète - 2 minutes pour comprendre Avec le Dr Jacques Beltrand, pédiatre diabétologue hopital Necker enfants malades Présentée par Jean-Claude Durousseaud",
        createdBy : "Médecine TV",
        createdAt : "11-03-2021 18:22",
        comments : 0,
        type : "Diabète",
        status : "active",
        url: "https://www.youtube.com/watch?v=6vfaCl30jgo",
        img : "https://i.ytimg.com/vi/6vfaCl30jgo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDo_ERHKfY2snB5Vz3QvJF-vqO0Q",
        doctor_pic : "https://yt3.ggpht.com/ytc/AKedOLREOR26ylYaVudZB4fqGzxFpFZHTm4jpv5hKksKPw=s88-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 6,
        title : "Comment reconnaître les signes de paludisme, Medical Aid Films nous donne quelques astuces",
        description : "Apprenez à reconnaître efficacement les signes de paludisme à travers cette vidéo de Medical Aid Films",
        createdBy : "Medical Aid Films - Films For Life",
        createdAt : "11-03-2021 18:35",
        comments : 0,
        type : "Paludisme",
        status : "active",
        url: "https://www.youtube.com/watch?v=Y0HAiGizSQM",
        img : "https://i.ytimg.com/vi/Y0HAiGizSQM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsFnaeeFK2Bhe5G9SoAIPMcfaxLg",
        doctor_pic : "https://yt3.ggpht.com/ytc/AKedOLQBenMM3Zv7aKVpGKPs95jLilfwarGs7Fof3Jcnnw=s88-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 7,
        title : "Mon enfant a de la fièvre: Comment réagir ?",
        description : "Comment réagir face à un cas de fièvre ? Découvrez les conseils à travers cet article de Santé Magazine",
        createdBy : "Santé Magazine",
        createdAt : "11-03-2021 18:45",
        comments : 0,
        type : "Astuces Santé",
        status : "active",
        url: "https://www.youtube.com/watch?v=7qe521waKL8",
        img : "https://i.ytimg.com/vi/7qe521waKL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwpTFM9dXKeIs_akzz2X94llXOhA",
        doctor_pic : "https://yt3.ggpht.com/ytc/AKedOLRbx1PI2Zyi6VgS-JZiGpZ3bwbvSu1v2MWrrYLlng=s88-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 8,
        title : "Les gestes barrières contre le covid-19 ",
        description : "Un bon resumé des gestes barrières du Groupe Vivalto Santé.",
        createdBy : "Groupe Vivalto Santé",
        createdAt : "11-03-2021 18:52",
        comments : 0,
        type : "Covid-19",
        status : "active",
        urm: "https://www.youtube.com/watch?v=NPHmg0EqFoI",
        img : "https://i.ytimg.com/vi/NPHmg0EqFoI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk8c170Ooq0ZKGQsalvGIHUcvuGg",
        doctor_pic : "https://yt3.ggpht.com/ytc/AKedOLRCj0i6u_Y0AdUHqH1api9DtIHADd_HtjMODnY-vA=s88-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 9,
        title : "Une méthode infaillible pour calmer un bébé en pleurs",
        description : "On est vite dépassé par les pleurs d'un bébé. Ces techniques pourraient vous aider.",
        createdBy : "LeHuffPost",
        createdAt : "11-03-2021 18:59",
        comments : 0,
        type : "Enfants",
        status : "active",
        url:"https://www.youtube.com/watch?v=yAtwo2o92Ow",
        img : "https://i.ytimg.com/vi/yAtwo2o92Ow/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzazIMgKTKbbU_0Q3R6uUK9s_UCQ",
        doctor_pic : "https://yt3.ggpht.com/ytc/AKedOLSbq5jH2AiuL5Y8zUN9kQJnRIz5dI5RwhUMQza8=s88-c-k-c0x00ffffff-no-rj"
      },
      {
        id : 10,
        title : "Comment soulager les nausées de la grossesse ? ",
        description : "Avoir le cœur qui se soulève à la moindre odeur de café ou de tabac… Ne plus pouvoir rien avaler même quand on meurt de faim… Notre sage-femme Anna Roy vous donne de bons conseils pour soulager les nausées.",
        createdBy : "La Maison des Maternelles",
        createdAt : "11-03-2021 19:04",
        comments : 0,
        type : "Femmes Enceintes",
        status : "active",
        url:"https://www.youtube.com/watch?v=cZibfVNXmxc",
        img : "https://i.ytimg.com/vi/cZibfVNXmxc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3fuZaoitMpyiYdlnbZcOSiKu1Sw",
        doctor_pic : "https://yt3.ggpht.com/KXupNxcW0LlR6WQ5cSSceWrSn8WEGeFQSLv82OCBPHbFRnQD26JCa99bY2g0qHJJRNTrI_raWjU=s88-c-k-c0x00ffffff-no-rj"
      }
    ]


    let advantages = [
      {
        id : 1,
        title : "Gagnez du temps au quotidien",
        first: "Prise de RDV en ligne 24h/24 et 7j/7",
        firstImg:"fa fa-calendar",
        secondImg: "fa fa-file",
        descFirst: "Diminuer les sollicitations de vos patients qui gèrent leurs RDV de manière autonome.",
        second: "Partage de documents en ligne",
        descSecond: "Partagez vos ordonnances et autres documents médicales sur le compte en ligne de vos patients.",
        third: "Echanger avec les patients",
        thirdImg:"fa fa-comments",
        descThird:"Prévenez vos patients par SMS ou email d’une annulation, d’un retard ou de consignes liées à leur RDV.",
        img : "far fa-clock"

      },
      {
        id : 2,
        title : "Optimiser la prise en charge de vos patients",
        first: "Dossier médicale en ligne",
        firstImg:"fa fa-folder-open",
        secondImg: "fa fa-share-square",
        descFirst: "Consulter et remplisser le dossier médicale de vos patients adultes en ligne via leur Dossier médical partagé",
        second: "Recommandation en ligne",
        descSecond: "Recommander à vos confrères, des patients  directement via votre compte en ligne.",
        third: "Préparer vos consultation",
        thirdImg:"fa fa-info",
        descThird:"Communiquez toutes les consignes et informations nécessaire à une bonne prise en charge",
        img : "fa fa-rocket"

      },
      {
        id : 3,
        title : "Développez l'activité de votre structure de santé",
        first: "Rappel de RDV",
        firstImg:"fa fa-search-minus",
        secondImg: "fa fa-user-plus",
        descFirst: "Réduisez le nombre de RDV manqués grâce aux rappels automatiques et capitalisez sur la liste d’attente.",
        second: "Acquisition de nouveaux patients",
        descSecond: "Recevez de nouveaux patients grâce à votre visibilité sur notre plateforme et au système de recommandation",
        third: "Consultation vidéo (Bientôt dispo)",
        thirdImg:"fa fa-play-circle",
        descThird:"Proposez des consultations vidéo pour un suivi plus simple, sans contrainte de déplacement.",
        img : "fa fa-hospital"
      },
      {
        id : 4,
        title : "Gagnez en confort de travail",
        first: "Agenda simple et intuitif",
        firstImg:"fa fa-search-minus",
        secondImg: "fa fa-retweet",
        descFirst: "Prenez, déplacez ou annulez vos RDV en quelques clics grâce à nos fonctionnalités.",
        second: "Rappels automatiques de RDV",
        descSecond: "Diminuer vos rendez-vous non honorés grâce aux SMS/emails de rappel envoyés automatiquement à vos patients.",
        third: "Application mobile (Bientôt dispo)",
        thirdImg:"fa fa-mobile",
        descThird:"Accédez à votre agenda où et quand vous le souhaitez, même en déplacement.",
        img : "fa fa-thumbs-up"
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
    return {transactions:transactions,comments:comments,favourites:favourites,advantages:advantages,blogs:blogs,specialityList:specialityList,appointments:appointments,doctors:doctors,patients:patients,reviews:reviews};

  }
}
