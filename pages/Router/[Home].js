import React from 'react'
import { useRouter } from 'next/router';


export const getStaticPaths=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();
    const paths=data.map((x)=>{
        return{
            params:{
                Home:x.id.toString()
            }
        };
    });
    return{
        paths,
        fallback:false
    }}
export const getStaticProps= async (context)=>{
    const id=context.params.Home
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data=await res.json();
    return{
        props:{
            data,

        },
    };
  };
const Home = ({data}) => {
    // const router = useRouter()
    // const {ids} = router.query
  
    const {id,title,body}=data
  return (
    <div>
        
        <h1>{id}</h1>
         <h3>{title}</h3>
         <p>{body}</p>


    </div>
  )
}

export default Home