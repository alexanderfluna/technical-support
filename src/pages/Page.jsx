import { useState } from 'react';
import Navbar from '../components/Navigation/Navbar'
import ChatBot from '../components/Chatbox'
import MainContent from './MainContent';
import '../styles/MainContent.css'

const Page = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
        <Navbar onCategoryChange={setSelectedCategory}/>
        <MainContent category={selectedCategory}/>
        <ChatBot />
    </div>
  )
}

export default Page