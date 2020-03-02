import React,{useState,useRef,useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import awsconfig from '../aws-exports';
import { I18n } from 'aws-amplify';
import {ZXing} from '../dist/zxing-pdf417.js'; 
import reverse  from "../examples/11.jpg"
import Webcam from "react-webcam";

import $ from 'jquery'; 

I18n.setLanguage('en');

const SacarFoto=(setSrc,webcamRef)=>{
  setTimeout(()=>{setSrc(webcamRef.current.getScreenshot());SacarFoto(setSrc,webcamRef)},200)
}
const Load = (image,personas,setPersonas)=>{
  var canvas = document.createElement('canvas')
var
canvas_context = canvas.getContext('2d'),
                  source,
                  binarizer,
                  bitmap;
canvas.width = image.naturalWidth;
canvas.height = image.naturalHeight;
try {
  canvas_context.drawImage(image, 0, 0, canvas.width, canvas.height);
  var source = new ZXing.BitmapLuminanceSource(canvas_context, image)
  binarizer = new ZXing.Common.HybridBinarizer(source);
  bitmap = new ZXing.BinaryBitmap(binarizer);
  const lista=ZXing.PDF417.PDF417Reader.decode(bitmap, null, false)[0].Text.split("@")
  console.log(lista.length)
 if (lista.length==8||
     lista.length==9||
     lista.length==10){
   setPersonas([...personas,{nombre:lista[1]+" "+lista[2],sexo:lista[3],dni:lista[4],fechaNacimiento:lista[6]}])
  
 }
  
  
}
catch(e){
  //alert(e)
      }
    }


const IndexPage = () => {
  const[personas,setPersonas]=useState([])
  const[src,setSrc]=useState("")
  const img=useRef()
  const webcamRef = React.useRef(null);
  const videoConstraints = {
      facingMode: { exact: "environment" }
    };
useEffect(()=>{
  setTimeout(SacarFoto(setSrc,webcamRef),2000)
},[])
return(
  <Layout>
    <SEO title="Home" />
    <h1>Personas ingresadas</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <img ref={img}  id="imageId" onLoad={(e)=>{Load(e.target,personas,setPersonas)}} src={src}/>
    <Webcam  style={{visible:"hidden"
    }} height={800}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={900} videoConstraints={videoConstraints} audio={false} ref={webcamRef}/>
      <input type="file" onChange={(x)=>{setSrc(URL.createObjectURL(x.target.files[0]))}} />
    </div>
    <button onClick={()=>{setSrc(webcamRef.current.getScreenshot());/*Load($("img")[0],personas,setPersonas)*/}}>dsdsdsd</button>
{personas.map(x=><h2>{x.nombre} {x.sexo} {x.dni} {x.fechaNacimiento}</h2>)}
  </Layout>
)}

export default IndexPage
/*export default withAuthenticator(IndexPage, false, [
  <SignIn/>,
    <ConfirmSignIn/>,
  <VerifyContact/>,
  <ConfirmSignUp/>,

]);*/
