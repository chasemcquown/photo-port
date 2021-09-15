import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

  // NOTE: In the following expression, we set the initial value of contactSelected to false. This is to prevent the contact form from showing when a user initially navigates to the homepage. The Gallery will display instead, which is the first thing Lyza's customers will want to see
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;

// NOTE: 
// if(!contactSelected) {
//   <>
//   <Gallery currentCategory={currentCategory}></Gallery>
//   <About></About>
// </> 
// } else {
//   <ContactForm></ContactForm>
// }
// IS THE SAME AS:
// {!contactSelected ? (
//   <>
//     <Gallery currentCategory={currentCategory}></Gallery>
//     <About></About>
//   </>
// ) : (
//     <ContactForm></ContactForm>
// )}
