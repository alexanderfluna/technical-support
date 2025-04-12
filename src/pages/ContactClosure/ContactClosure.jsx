import React, { useState, useEffect } from 'react';
import '../../styles/Pages.css'
import ContactClosureSelectorTool from './ContactClosureSelectorTool';
import ContactClosureFAQ from './ContactClosureFAQ';
import ContactClosureTroubleshooting from './ContactClosureTroubleshooting';

const ContactClosure = () => {
  return (
    <div>
      <main className="faq-container">
          <ContactClosureTroubleshooting/>
          <ContactClosureFAQ/>
          <ContactClosureSelectorTool/>
      </main>
    </div>
  );
};

export default ContactClosure;
