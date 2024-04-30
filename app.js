const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})




const translations = {
    en: {
      "navbar_links1": "Home",
      "navbar_links2": "Bar Menu",
      "navbar_links3": "Contact",
      "banner_heading": "Welcome to Gimle Pub",
      "banner_text": "See what we have to offer",
      "events_heading": "Events",
      "events_text": "Experience unforgettable moments with our events! From concerts to lively theme parties, there is always something exciting going on. Tickets for our events can be easily purchased through our ticket service Hoopla. Click the button below to secure your place!",
      "history_heading": "About Us",
      "history_text": "Welcome to Gimle Pub in Skien, the city's oldest meeting place since 1928. You will find us at Kverndalsgata 4A. Here we offer a cozy atmosphere and good service. We have a large selection of beers and many different activities, such as live music. In 2018, the new owners, Selahattin Temel and Malene Sørensen, renovated the pub. We welcome everyone, both locals and visitors, to come and create good memories with us. Hope to see you soon at Gimle Pub - a place for everyone!",
      "activities_heading": "Activities",
      "activities1_heading": "Live Sports",
      "activities1_text": "We broadcast everything from the Premier League and Champions League to the Norwegian Premier League and horse racing.",
      "activities2_heading": "Games",
      "activities2_text": "Come and play! Try billiards, darts, poker, or karaoke. Stop by for a fun round with us.",
      "activities3_heading": "Quiz",
      "activities3_text": "Weekly quiz nights, every Monday and Thursday! Test your knowledge!",
      "contact_heading": "Contact Us",
      "contact_text": "Do you have something to tell us, feedback, or other inquiries? Contact us at gimle@pub.no or find us at Kverndalsgata 4a. Forgot something? Come by and take a look; we are open every day from 16:00. If you are unable to visit, feel free to send us an email at gimle@pub.no, and we will respond as soon as possible.",
      "opening_hours": "Opening Hours",
      "monday": "Monday",
      "tuesday": "Tuesday",
      "wednesday": "Wednesday",
      "thursday": "Thursday",
      "friday": "Friday",
      "saturday": "Saturday",
      "sunday": "Sunday",
      "contact_us": "Contact Us"
    },
    no: {
      "navbar_links1": "Hjem",
      "navbar_links2": "Bar Meny",
      "navbar_links3": "Kontakt",
      "banner_heading": "Velkommen til Gimle Pub",
      "banner_text": "Se hva vi har å tilby",
      "events_heading": "Arrangementer",
      "events_text": "Opplev uforglemmelige øyeblikk med våre arrangementer! Alt fra konserter til livlige temafester, hos oss er det alltid noe spennende på gang. Billettene til våre arrangementer kan enkelt kjøpes gjennom biletttjenesten vår Hoopla. Klikk på knappen nedenfor for å sikre deg din plass!",
      "history_heading": "Om oss",
      "history_text": "Velkommen til Gimle Pub i Skien, byens eldste møtested siden 1928. Du finner oss i Kverndalsgata 4A. Her tilbyr vi en koselig atmosfære og god service. Vi har et stort utvalg av øl og mange forskjellige aktiviteter, som live musikk. I 2018 pusset de nye eierne, Selahattin Temel og Malene Sørensen, opp puben. Vi ønsker alle velkommen, både lokale og besøkende, til å komme og skape gode minner hos oss. Håper vi ser deg snart på Gimle Pub – et sted for alle!",
      "activities_heading": "Aktiviteter",
      "activities1_heading": "Live Sport",
      "activities1_text": "Vi sender alt fra Permier League og Champions League til Eliteserien og travløp.",
      "activities2_heading": "Spill",
      "activities2_text": " Kom og spill! Prøv biljard, dart, poker, eller karaoke. Stikk innom for en morsom runde med oss.",
      "activities3_heading": "Quiz",
      "activities3_text": "Ukentlige quizkvelder, hver mandag og torsdag! Test kunnskapen din!",
      "contact_heading": "Kontakt oss",
      "contact_text": "Har du noe å fortelle oss, ris/ros eller andre henvendelser? Ta kontakt med oss på gimle@pub.no eller så finner du oss på kverndalsgata 4a. Glemt noe? Kom innom og ta en titt, vi er åpent alle dager fra kl.16:00. Har du ikke mulighet til å komme innom send oss gjerne en mail på gimle@pub.no så svarer vi deg så snart vi har mulighet.",
      "opening_hours": "Åpningstider",
      "monday": "Mandag",
      "tuesday": "Tirsdag",
      "wednesday": "Onsdag",
      "thursday": "Torsdag",
      "friday": "Fredag",
      "saturday": "Lørdag",
      "sunday": "Søndag",
      "contact_us": "Kontakt Oss"
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    // Check if a language is saved in localStorage and use it; otherwise, use Norwegian as default
    let currentLanguage = localStorage.getItem('currentLanguage') || 'no';
    
    // Update language display based on currentLanguage
    updateLanguage(currentLanguage);
    
    document.getElementById('languageToggle').addEventListener('click', function() {
      // Toggle the current language between English and Norwegian
      currentLanguage = (currentLanguage === 'en') ? 'no' : 'en';
      
      // Save the new language preference in localStorage
      localStorage.setItem('currentLanguage', currentLanguage);
      
      // Update the webpage text to the new language
      updateLanguage(currentLanguage);
    });
  });
  
  function updateLanguage(lang) {
    // Loop through the translations object to update webpage text
    for (const key in translations[lang]) {
      const element = document.querySelector(`[data-key="${key}"]`);
      if (element) element.textContent = translations[lang][key];
    }
  }
  


