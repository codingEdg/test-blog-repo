import React, { useState } from 'react'

const AddArticle = () => {

    const [newArticle, setNewArticle] = useState({})


    // {
    //     "writer": "Joberty Editorial",
    //     "date": "01 Jun 2023",
    //     "heading": "Good Reasons For Leaving a Job",
    //     "shortDec": "Explore insightful reasons for leaving a job, when it's the right time, and how to express these reasons professionally to land a better job. Plus some tips to thrive in interviews.",
    //     "imgUrl": "https://blog.joberty.de/content/images/size/w2640/2023/05/ux-designer.png",
    //     "content": [
    //       "You should always have three reasons for leaving a job. There’s the reason you tell your manager, then the explanation you give to your new employer, and then there’s the truth. You might be wondering why we can’t just tell the truth and give the real reason to all three parties? Well, it’s because the truth will set you free, and we don’t want to be free, we want to be employed. Therefore, we have to give curated answers that’ll smooth the doubts of HR and management so that everyone involved can feel comfortable knowing it’s not them, it’s you.",
    //       "You would like to grow. You would like to try new things. Your interests have changed. But in reality, your company is toxic, you’re not getting paid your worth, and your coworkers are so uninspiring that it’s driving you nuts. But you can’t say any of that because that would make you seem unprofessional and hurt the feelings of an entire HR department who work tirelessly at pushing quality talent out. Since you can’t deal in truth, you’d best find two or three reasons (from below) that make you sound so ambitious and put together that any company who asks will literally be forced to hire you on the spot!",
    //       "You should always have three reasons for leaving a job. There’s the reason you tell your manager, then the explanation you give to your new employer, and then there’s the truth. You might be wondering why we can’t just tell the truth and give the real reason to all three parties? Well, it’s because the truth will set you free, and we don’t want to be free, we want to be employed. Therefore, we have to give curated answers that’ll smooth the doubts of HR and management so that everyone involved can feel comfortable knowing it’s not them, it’s you.",
    //       "You would like to grow. You would like to try new things. Your interests have changed. But in reality, your company is toxic, you’re not getting paid your worth, and your coworkers are so uninspiring that it’s driving you nuts. But you can’t say any of that because that would make you seem unprofessional and hurt the feelings of an entire HR department who work tirelessly at pushing quality talent out. Since you can’t deal in truth, you’d best find two or three reasons (from below) that make you sound so ambitious and put together that any company who asks will literally be forced to hire you on the spot!",
    //       "You should always have three reasons for leaving a job. There’s the reason you tell your manager, then the explanation you give to your new employer, and then there’s the truth. You might be wondering why we can’t just tell the truth and give the real reason to all three parties? Well, it’s because the truth will set you free, and we don’t want to be free, we want to be employed. Therefore, we have to give curated answers that’ll smooth the doubts of HR and management so that everyone involved can feel comfortable knowing it’s not them, it’s you.",
    //       "You would like to grow. You would like to try new things. Your interests have changed. But in reality, your company is toxic, you’re not getting paid your worth, and your coworkers are so uninspiring that it’s driving you nuts. But you can’t say any of that because that would make you seem unprofessional and hurt the feelings of an entire HR department who work tirelessly at pushing quality talent out. Since you can’t deal in truth, you’d best find two or three reasons (from below) that make you sound so ambitious and put together that any company who asks will literally be forced to hire you on the spot!"
    //     ]
    //   }
    const updateArticleAPI = (obj)=>{

    }
    
    const handleChange =(e)=>{
        let name = e.target.name
        let value = e.target.value
        if(name==='content'){
            setNewArticle(prev=>({...prev, [name]:[value]}))
        } else{
            setNewArticle(prev=>({...prev, [name]:value}))
        }

    }
  return (
    <form>
    <input name="writer" type="text" class="feedback-input" placeholder="Writer Name" onChange={handleChange}/>
    <input name="email" type="text" class="feedback-input" placeholder="Writer Email" onChange={handleChange}/>
    <input name="heading" type="text" class="feedback-input" placeholder="Topic/ BLOG Title" onChange={handleChange}/>
    <input name="imgUrl" type="text" class="feedback-input" placeholder="Image Link/URL" onChange={handleChange}/>
    <textarea name="content" class="feedback-input" placeholder="Content" onChange={handleChange}></textarea>
    <input type="submit" value="SUBMIT" />
  </form>

  )
}

export default AddArticle