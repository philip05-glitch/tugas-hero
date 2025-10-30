// import React from "react";
// import ling from  './assets/img/ling.jpg'
// import gusion from  './assets/img/gusion.jpg'
// import zilong from  './assets/img/zilong.jpg'
// function img(props){ //komponan parent
//   return (
//     <img src={props.src} alt="" style={{width:'1000px'}}/>
//   )

// }





// function App() {      //app untuk objek
//    return (
//     <>
//   <h1 className="text-danger">HERO MLBB</h1>
//     <img src={ling} alt="" style={{width:'350px'}}/>
//     <img src={gusion} alt="" style={{width:'350px'}}/>
//     <img src={zilong} alt="" style={{width:'350px'}}/>
//     </>
//     )
// }

// export default img


// function App(){   //app untuk array
//     const users = ['philip','mansyur','gabriel','maryanto','azizul']

//     return(
//         <>
//         <h1 className="text-danger">belajar looping</h1>
//         <h3>daftar nama orang</h3>
//         < hr/>

//         <ul>
//             {users.map((users, index) =>(
//                 <li key={index}>{users}</li>
//             ))}
//             <li>Phiip</li>
//             <li>Mansyur</li>
//             <li>Gabriel</li>
//             <li>Maryanto</li>
//             <li>Azizul</li>


//         </ul>
//         </>
//     )
// }

// export default App


// function product(){   
//     const product = [
//         {id:1, name: 'laptop',price: '10000000'},
//         {id:2, name: 'mouse', price: '150000'},
//         {id:3, name: 'keyboard', price: '300000'}
//     ]

//     return(
//         <div>
//             {product.map(product =>(
//                 <div key={product.id}>
//                     <h3>{product.name}</h3>
//                     <p>Rp {product.price.toLocaleString()}</p>

//                 </div>
//             ))}
//             </div>
//     );
        

    
//     }
// export default product


// import ling from "./assets/img/ling.jpg";
// import Zilong from "./assets/img/zilong.jpg";
// import gusion from "./assets/img/gusion.jpg";
// import Haya from "./assets/img/Haya.jpg";
// import Shin from "./assets/img/Shin.jpg";

// function App() {
//   const heroes = [
//     { id: 1, name: "ling", img: ling },
//     { id: 2, name: "Zilong", img: Zilong },
//     { id: 3, name: "gusion", img: gusion },
//     { id: 4, name: "Haya", img: Haya },
//     { id: 5, name: "Shin", img: Shin },
//   ];

//   return (
//     <div className="bg-[#0f0f0f] min-h-screen flex flex-col items-center text-white p-6">
//       <h2 className="text-3xl font-bold mb-8 text-center">
//         HERO MOBILE LEGENDS
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {heroes.map((hero) => (
//           <div
//             key={hero.id}
//             className="bg-[#1a1a1a] border border-gray-600 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hero.img}
//               alt={hero.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 text-center font-semibold text-lg">
//               {hero.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import ling from "./assets/img/ling.jpg";
import gusion from "./assets/img/gusion.jpg";
import zilong from "./assets/img/zilong.jpg";
import Haya from "./assets/img/Haya.jpg";
import Shin from "./assets/img/Shin.jpg";
import aldous from "./assets/img/aldous.jpg";

function HeroCard({ src, name }) {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid gray",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
        transition: "transform 0.3s",
        width: "300px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={src}
        alt={name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          textAlign: "center",
          padding: "12px",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {name}
      </div>
    </div>
  );
}

function App() {
  const heroes = [
    { id: 1, name: "ling", img: ling },
    { id: 2, name: "gusion", img: gusion },
    { id: 3, name: "zilong", img: zilong },
    { id: 4, name: "Haya", img: Haya },
    { id: 5, name: "Shin", img: Shin },
    { id: 6, name: "aldous", img: aldous },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        HERO MLBB
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          justifyContent: "center",
          maxWidth: "1000px",
        }}
      >
        {heroes.map((hero) => (
          <HeroCard key={hero.id} src={hero.img} name={hero.name} />
        ))}
      </div>
    </div>
  );
}

export default App;









