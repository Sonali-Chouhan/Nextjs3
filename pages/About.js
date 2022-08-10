import Link from "next/link"
export const getStaticProps= async ()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();
    return{
        props:{
            data,

        },
    };
  };
export default function About({data}) {
  console.log("1",data);
  
  return (
    <div>
    {
      data.slice(0,4).map((x,index)=>{
        return(
          <div key={index}>
             <Link href={`/About/${x.id}`}><h3>Title={x.title}</h3></Link> 
          </div>
        )
      })
    }
    </div>
  )
}
