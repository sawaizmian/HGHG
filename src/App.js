import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./pages/SignIn/SignIn/AuthContext";
import "./App.css";

// All Components
import Header from "./components/Header/header";
import NotFound from "./components/404Page/NotFound";
import Footer from "./components/Footer/footer";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import ContactUs from "./components/Contact/ContactUs";

// SignIn
import SignInPage from "./pages/SignIn/SignIn/SignIn";
import WelcomeBackPage from "./pages/SignIn/WelcomeBack/WelcomeBack";
import ForgotPasswordPage from "./pages/SignIn/Forgot Password/ForgotPassword";
import NewPasswordPage from "./pages/SignIn/New Password/New-Password";

// SignUp
import SignUpPage from "./pages/SignUp/SignUp/SignUp";
import WelcomePage from "./pages/SignUp/WelcomeBack/WelcomeNew";
import VerificationCode from "./pages/SignUp/Verify6Digit/Verify6Digit";

// Home Page
import HomeSlider1 from "./pages/Home/HomeSlider1/HomeSlider1";
import VideoFrameOne from "./pages/Home/VideoFrame1/videoframeone";
import Box1Cascos from "./pages/Home/Box1Cascos/Box1Cascos";
import Box1Snaithe from "./pages/Home/Box1Snaithe/Box1Snaithe";
import Box1Velyen from "./pages/Home/Box1Velyen/Box1Velyen";
import ToolSlideshow from "./pages/Home/ToolSlideshow/ToolSlideshow";
import Box1Fasep from "./pages/Home/Box1Fasep/Box1Fasep";
import Box2Velyen from "./pages/Home/Box2Velyen/Box2Velyen";
import WorkshopEquipment1 from "./pages/Home/WorkshopEquipment/WorkshopEquipment1/WorkshopEquipment1";
import WorkshopEquipment2 from "./pages/Home/WorkshopEquipment/WorkshopEquipment2/WorkshopEquipment2";
import Box2Back2 from "./pages/Home/BackImage1/Box3back";
import Box2Back3 from "./pages/Home/BackImage2/box2back";
import BackImage3 from "./pages/Home/BackImage3/BackgroundImage";
import Box4Back4 from "./pages/Home/BackImage4/box4back";
import Box5Back5 from "./pages/Home/BackImage5/box5back";
import WorkshopEquipment3 from "./pages/Home/WorkshopEquipment/WorkshopEquipment3/WorkshopEquipment3";
import WorkshopEquipment4 from "./pages/Home/WorkshopEquipment/WorkshopEquipment4/WorkshopEquipment4";
import Box2Fasep from "./pages/Home/Box2Fasep/Box2Fasep";
import Box6Back6 from "./pages/Home/BackImage6/box6back";
import Box7Back7 from "./pages/Home/BackImage7/box7back";
import Box3Fasep from "./pages/Home/Box3Fasep/Box3Fasep";
import WorkshopEquipment5 from "./pages/Home/WorkshopEquipment/WorkshopEquipment5/WorkshopEquipment5";
import Box8Back8 from "./pages/Home/BackImage8/box8back";
import Box9Back9 from "./pages/Home/BackImage9/box9back";
import Box10Back10 from "./pages/Home/BackImage10/box10back";
import Box11Back11 from "./pages/Home/BackImage11/box11back";
import Box12Back12 from "./pages/Home/BackImage12/box12back";
import Box13Back13 from "./pages/Home/BackImage13/box13back";
import WorkshopEquipment6 from "./pages/Home/WorkshopEquipment/WorkshopEquipment6/WorkshopEquipment6";
import BoxSnaitheCharge from "./pages/Home/BoxSnaitheCharge/BoxSnaitheCharge";
import Box14Back14 from "./pages/Home/BackImage14/box14back";
import Box15Back15 from "./pages/Home/BackImage15/box15back";
import Box1SnaitheCharge2 from "./pages/Home/Box1SnaitheCharge2/Box1SnaitheCharge2";
import Box16Back16 from "./pages/Home/BackImage16/box16back";
import WorkshopEquipment7 from "./pages/Home/WorkshopEquipment/WorkshopEquipment7/WorkshopEquipment7";
import VideoFrametwo from "./pages/Home/VideoFrame2/videoframetwo";
import Box1KrofTools from "./pages/Home/Box1KrofTools/Box1KrofTools";
import WorkshopEquipment8 from "./pages/Home/WorkshopEquipment/WorkshopEquipment8/WorkshopEquipment8";

// Product Page
import FasepOneMainProduct from "./pages/Products/ProductMainPage/Fasep/Product1/FasepOneMainProduct";
import DescriptionProduct1 from "./pages/Products/ProductMainPage/Fasep/Product1/Description/DescriptionProduct1";
import DetailInside from "./pages/Products/ProductMainPage/Fasep/Product1/alldetail/AllDetails";

// All Product Pages
import AllProducts from "./pages/Products/allproduct";
import AllListViewProducts from "./pages/Products/AllListViewProducts/AllListViewProducts";

// Other Product Pages
import EVProduct from "./pages/Products/EVProducts/EVProducts";
import Lifts from "./pages/Products/Lifts/Lifts";
import WheelBalancer from "./pages/Products/WheelBalancer/WheelBalancer";
import TireChanger from "./pages/Products/TireChanger/TireChanger";
import ProfessionalTool from "./pages/Products/ProfessionalTools/ProfessionalTools";
import WheelAligners from "./pages/Products/WheelAligners/WheelAligners";
import TwoPostLifts from "./pages/Products/TwoPostLifts/TwoPostLift";
import FourPostLifts from "./pages/Products/FourPostLifts/FourPostLifts";
import ScissorLifts from "./pages/Products/ScissorLifts/ScissorLifts";

// Compare Page
import AllCompare from "./pages/Products/Compare/allcompare";
import Box17Back17 from "./pages/Home/BackImage17/box17back";
import Box1DQN from "./pages/Home/Box1DQN/Box1DQN";
import Box1Vessel from "./pages/Home/Box1Vessel/Box1Vessel";
import Box18Back18 from "./pages/Home/BackImage18/box18back";
import Box2Vessel from "./pages/Home/Box2Vessel/Box2Vessel";
import Box19Back19 from "./pages/Home/BackImage19/box19back";

function App() {
  const [currentProduct, setCurrentProduct] = React.useState(null);
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Products setCurrentProduct={setCurrentProduct}/>} />
        <Route path="/listviewproducts" element={<ListProducts />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/fasepproduct1" element={<ProductFasepMainPage currentProduct={currentProduct}/>} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/evproducts" element={<EVProducts />} />
        <Route path="/wheelbalancer" element={<WheelBalancers />} />
        <Route path="/2postlift" element={<TwoPostLift />} />
        <Route path="/4postlift" element={<FourPostLift />} />
        <Route path="/scissorlift" element={<ScissorLift />} />
        <Route path="/wheelaligners" element={<WheelAligner />} />
        <Route path="/tirechanger" element={<TireChangers />} />
        <Route path="/lift" element={<Lift />} />
        <Route path="/professionaltools" element={<ProfessionalTools />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin/welcome" element={<WelcomeBack />} />
        <Route path="/signin/forgot-password" element={<ForgotPassword />} />
        <Route path="/signin/new-password" element={<NewPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/welcome-new" element={<WelcomeNew />} />
        <Route path="/signup/verify" element={<VerifyCode />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header />
      <HomeSlider1 />
      <VideoFrameOne />
      <Box1DQN />
      <Box17Back17 />
      <Box1Vessel />
      <Box18Back18 />
      <Box2Vessel />
      <Box19Back19 />
      <Box1Cascos />
      <Box2Back2 />
      <Box1Snaithe />
      <Box2Back3 />
      <Box1Velyen />
      <BackImage3 />
      <Box1Fasep />
      <Box4Back4 />
      <Box2Velyen />
      <Box5Back5 />
      <WorkshopEquipment1 />
      <Box9Back9 />
      <WorkshopEquipment2 />
      <Box10Back10 />
      <WorkshopEquipment3 />
      <Box11Back11 />
      <WorkshopEquipment4 />
      <Box6Back6 />
      <Box2Fasep />
      <Box7Back7 />
      <Box3Fasep />
      <Box8Back8 />
      <WorkshopEquipment5 />
      <Box12Back12 />
      <BoxSnaitheCharge />
      <Box14Back14 />
      <WorkshopEquipment6 />
      <Box15Back15 />
      <Box1SnaitheCharge2 />
      <Box16Back16 />
      <WorkshopEquipment7 />
      <Box1KrofTools />
      <WorkshopEquipment8 />
      <ToolSlideshow />
      <Box13Back13 />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function Products({setCurrentProduct}) {
  return (
    <>
      <Header />
      <AllProducts setCurrentProduct={setCurrentProduct} />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function EVProducts() {
  return (
    <>
      <Header />
      <EVProduct />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function WheelBalancers() {
  return (
    <>
      <Header />
      <WheelBalancer />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
function WheelAligner() {
  return (
    <>
      <Header />
      <WheelAligners />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
function TireChangers() {
  return (
    <>
      <Header />
      <TireChanger />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
function ProfessionalTools() {
  return (
    <>
      <Header />
      <ProfessionalTool />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function Lift() {
  return (
    <>
      <Header />
      <Lifts />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function TwoPostLift() {
  return (
    <>
      <Header />
      <TwoPostLifts />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function FourPostLift() {
  return (
    <>
      <Header />
      <FourPostLifts />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function ScissorLift() {
  return (
    <>
      <Header />
      <ScissorLifts />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function ListProducts() {
  return (
    <>
      <Header />
      <AllListViewProducts />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function Compare() {
  return (
    <>
      <Header />
      <AllCompare />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function ProductFasepMainPage({currentProduct}) {
  React.useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);
  return (
    <>
      <Header />
      <FasepOneMainProduct currentProduct={currentProduct}/>
      <DescriptionProduct1 />
      <DetailInside />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function Contact() {
  return (
    <>
      <Header />
      <ContactUs />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function SignIn() {
  return (
    <>
      <Header />
      <AuthProvider>
        <SignInPage />
      </AuthProvider>
    </>
  );
}

function ForgotPassword() {
  return (
    <>
      <Header />
      <ForgotPasswordPage />
    </>
  );
}

function NewPassword() {
  return (
    <>
      <Header />
      <NewPasswordPage />
    </>
  );
}

function WelcomeBack() {
  return (
    <>
      <Header />
      <WelcomeBackPage />
    </>
  );
}

function SignUp() {
  return (
    <>
      <Header />
      <SignUpPage />
    </>
  );
}

function WelcomeNew() {
  return (
    <>
      <Header />
      <WelcomePage />
    </>
  );
}

function VerifyCode() {
  return (
    <>
      <Header />
      <VerificationCode />
    </>
  );
}
function NotFoundPage() {
  return (
    <>
      <Header />
      <NotFound />
      <Footer />
    </>
  );
}

export default App;
