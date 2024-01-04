
import React from 'react';
import '../styles/Profile.css';
import '../styles/Products.css';
import contents from '../assets/data/content';
import { Products } from './Products';
import profileimg from "../assets/joo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaRegEdit } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { RiSpeakFill } from "react-icons/ri";
import { PiGenderIntersexBold } from "react-icons/pi";
import { MdRememberMe } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { Link } from 'react-router-dom';

import { TbCameraPlus } from "react-icons/tb";
import { BsFilePostFill } from "react-icons/bs";

import pic1 from "../assets/friendsimages/pic1.jpg";
import pic2 from "../assets/friendsimages/pic2.jpg";
import pic3 from "../assets/friendsimages/pic3.jpg";
import pic4 from "../assets/friendsimages/pic4.jpg";
import pic5 from "../assets/friendsimages/pic5.jpg";

const Profile = () => {
    return (
        <div>
            <div className='container'>
                <div className='rectangleprofile1'>
                    <div className="text">TAHWISSA</div>
                    <div className="line"></div>
                    <div className="profile-pic"><img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600' /></div>
                    <div className="NameUser">Arezki Yasmine </div>
                    <div className="Email">Y_arezki@estin.dz</div>
                    <div className="line1"></div>
                    <div className="text1">Menu</div>
                    <div className="menu-list">
                        <ul>
                            <li> <BsFileEarmarkPost className='CameraIcon' /> Posts </li>
                            <li> <FaUserFriends className="friendsicon" />Friends</li>

                        </ul>
                    </div>
                    <div className="line10"></div>
                    <div className="text10">Share your travel advice</div>
                    <div className="menu-list10">
                        <ul>
                            <li> <TbCameraPlus className='CameraPlus_icon' /> Post photos  </li>
                            <li> <BsFilePostFill className="PostAdd_icon" /> Write review </li>
                        </ul>
                    </div>
                </div>


                <div className='rectangleprofile2'>
                    <div className="text2"> Presentation
                        <FaRegEdit className="FaRegEdit1" />
                    </div>
                    <div className="line3"></div>
                    <div className="menu-list1">
                        <ul className='listeGauche'>
                            <li> <RiSpeakFill className="RiSpeakFill" />Parler couramment Français , Anglais , Arabe </li>
                            <li> <PiGenderIntersexBold className="PiGenderIntersexBold " />30 , femme</li>
                            <li> <MdRememberMe className="MdRememberMe" />Membre depuis 2020</li>
                        </ul>
                        <ul className='listeDroite'>
                            <li> <MdWork className='MdWork' /> Professeur</li>
                            <li> <RiComputerFill className="RiComputerFill" />Informatique</li>
                            <li> <BiWorld className="BiWorld" />Dellys , Boumerdes</li>
                        </ul>
                    </div>
                </div>



                <div className='rectangleprofile3'>
                    <div className='text3'>Interests</div>
                    <div className='containerG1'>
                        <div className='item'>cinema</div>
                        <div className='item'>randonnée</div>
                        <div className='item'> l'histoire</div>
                        <div className='item'>Art</div>
                        <div className='item'>nature</div>
                        <div className='item'>randonnée</div>

                    </div>
                </div>



                <div className='rectangleprofile4'>
                    <div className="text2"> A propos de moi
                        <FaRegEdit className="FaRegEdit1" />
                    </div>
                    <div className="line3"></div>
                    <p className='paragraphe'> En tant qu'amateur passionné, j'aime voyager pour découvrir de nouveaux horizons, toujours avide d'explorer des destinations riches en culture et en diversité.  Enthousiaste et curieux, je trouve une joie profonde dans l'acte de voyager, cherchant constamment  à élargir mes perspectives en embrassant les expériences uniques que le monde a à offrir.</p>
                </div>


                <div className='rectangleprofile5'>
                    <div className='freinds'>
                        <p className='Friendstitle'>Amis</p>
                        <div className="menu-listfriends">
                            <div className='friend1'>
                                <li>
                                    <img src={pic1} className='profileimg' />
                                    <p className='FriendsName'>Arezki Yasmine</p>
                                    <p className='FriendsWilaya'>Dellys, Boumerdes</p>
                                </li>
                            </div>

                            <div className='friend1'>
                                <li>
                                    <img src={pic2} className='profileimg' />
                                    <p className='FriendsName1'>Arezki Yasmine</p>
                                    <p className='FriendsWilaya1'>Dellys, Boumerdes</p>
                                </li>
                            </div>

                            <div className='friend1'>
                                <li>
                                    <img src={pic3} className='profileimg' />
                                    <p className='FriendsName2'>Arezki Yasmine</p>
                                    <p className='FriendsWilaya2'>Dellys, Boumerdes</p>
                                </li>
                            </div>

                            <div className='friend1'>
                                <li>
                                    <img src={pic4} className='profileimg' />
                                    <p className='FriendsName3'>Arezki Yasmine</p>
                                    <p className='FriendsWilaya3'>Dellys, Boumerdes</p>
                                </li>
                            </div>

                            <div className='friend1'>
                                <li>
                                    <img src={pic5} className='profileimg' />
                                    <p className='FriendsName4'>Arezki Yasmine</p>
                                    <p className='FriendsWilaya4'>Dellys, Boumerdes</p>
                                </li>
                            </div>

                            <div className='friend1'>
                                <li>
                                    <img src={profileimg} className='profileimg' />
                                    <p className='FriendsName5'>Arezki Yasmine</p>
                                    <p className='FriendsWilaya5'>Dellys, Boumerdes</p>
                                </li>
                            </div>

                            <div className='friend1'>
                                <li>
                                    <img src={pic1} className='profileimg' />
                                    <p className='FriendsName6'>Arezki Yasmine</p>
                                    <p className='FriendsWilaya6'>Dellys, Boumerdes</p>
                                </li>
                            </div>

                            <div className='friend1'>
                                <li>
                                    <img src={pic2} className='profileimg' />
                                    <p className='FriendsName7'>Arezki Yasmine</p>
                                    <p className='FriendsWilaya7'>Dellys, Boumerdes</p>
                                </li>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='rectangleprofile6'>
                    <div className="text4"> Your top posts </div>
                    <div className="line4"></div>
                    {contents.map(contents => (
                        <Products
                            key={contents.id}
                            image={contents.image}
                            name={contents.name}
                        />
                    ))}


                </div>


            </div>
        </div>
    );
};

export default Profile;
