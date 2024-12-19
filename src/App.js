// src/App.js
import React from 'react';
import './App.css';
import FadeInSection from './components/FadeInSection';
import {
	GlobeLock,
	Instagram,
	Linkedin,
	MessagesSquare,
	SendHorizonal,
	Twitter
} from 'lucide-react';
import { FaApple } from 'react-icons/fa6';
import { IoLogoAndroid } from 'react-icons/io';
import useWindowDimensions from './hooks/useWindowDimensions';
import useWheelValue from './hooks/useWheelValue';

function App() {
	const { width } = useWindowDimensions();
	const wheel = useWheelValue();
	return (
		<div className='App'>
			<main className='body p-[15px] max-w-[1440px] w-screen lg:max-h-[900px] lg:h-screen bg-white dark:bg-black text-black dark:text-white grid grid-rows-12 md:grid-rows-6 lg:grid-rows-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 '>
				<section
					className='container row-start-1 md:row-start-2 md:col-start-2 lg:col-start-3 col-span-2 row-span-2'
					id='ovya'
				>
					<h1 id='title-text'>OVYA</h1>
				</section>
				<p
					style={{
						opacity: width < 1024 ? 0 : wheel > 200 ? 0 : 1
					}}
					className='absolute font-bold bottom-[30px] left-1/2 -translate-x-1/2 transition-all ease-in-out duration-300'
				>
					Scroll For More
				</p>
				{/* About */}
				<FadeInSection
					start={0}
					animated={width < 1024}
					className='container justify-center font-[500] items-center p-[40px] row-start-3 md:row-start-1 lg:col-start-4 lg:row-start-1 col-span-2'
					id='about'
				>
					<p>
						OVYA was crafted with the vision of enhancing the
						intimacy and connection between couples by providing a
						private space to share and cherish meaningful moments.
					</p>
				</FadeInSection>
				{/* Features */}
				<FadeInSection
					start={500}
					animated={width < 1024}
					className='container flex-row lg:col-start-1 lg:row-start-3 col-span-2 row-span-2 p-[15px]'
				>
					<div className='flex flex-row justify-around h-[90%] w-full mt-2'>
						<img
							src={require('./assets/home-page.jpeg')}
							alt='post options'
							className='block h-auto w-auto max-h-[300px] max-w-[300px] rounded-xl border border-gray-200'
						/>
						<img
							src={require('./assets/post-view.jpeg')}
							alt='post creation'
							className='block h-auto w-auto max-h-[300px] max-w-[300px] rounded-xl border border-gray-200'
						/>
					</div>
					<p className='h-[10%] mt-2'>
						Elegant Design. Uniquely Yours.
					</p>
				</FadeInSection>
				{/* Posts */}
				<FadeInSection
					start={1000}
					animated={width < 1024}
					className='container lg:col-start-5 lgrow-start-2 col-span-2 row-span-2 p-[15px]'
					id='posts'
				>
					<div className='flex flex-row justify-around h-[90%] w-full mt-2'>
						<img
							src={require('./assets/post-options.jpeg')}
							alt='post options'
							className='block h-auto w-auto max-h-[300px] max-w-[300px] rounded-xl border border-gray-200'
						/>
						<img
							src={require('./assets/post-creation.jpeg')}
							alt='post creation'
							className='block h-auto w-auto max-h-[300px] max-w-[300px] rounded-xl border border-gray-200'
						/>
					</div>
					<p className='h-[10%] mt-2'>
						Curated Post Types. Unlimited Possibilities.
					</p>
				</FadeInSection>
				{/* ios */}
				<FadeInSection
					start={1500}
					animated={width < 1024}
					className='container row-start-4 md:row-start-2 md:col-start-1 lg:col-start-3 lg:row-start-1'
					id='ios'
				>
					<FaApple size={85} />
					<a
						href='https://apps.apple.com/us/app/ovya/id6503455141'
						rel='noopener noreferrer'
						target='_blank'
						id='ios-link'
						className='transition-all ease-in-out duration-300'
					>
						Download
					</a>
				</FadeInSection>
				{/* Droid */}
				<FadeInSection
					start={2000}
					animated={width < 1024}
					className='container px-[6px] col-start-1 row-start-5 md:row-start-3 md:col-start-4 lg:col-start-2 lg:row-start-2'
					id='android'
				>
					<IoLogoAndroid size={85} />
					<button
						/* href='https://playstore.com' */
						onClick={() =>
							alert('Android version is in development!')
						}
						rel='noopener noreferrer'
						target='_blank'
						id='ios-link'
						className='transition-all ease-in-out duration-300'
					>
						Coming Soon
					</button>
				</FadeInSection>
				{/* Socials */}
				<FadeInSection
					start={2500}
					animated={width < 1024}
					className='container row-start-4 col-start-2 md:col-start-4 md:row-start-1  lg:col-start-1 lg:row-start-1 row-span-2'
					id='socials'
				>
					<div id='social-icons'>
						<a
							href={'https://www.instagram.com/ovya.app/'}
							rel='noopener noreferrer'
							target='_blank'
						>
							<Instagram size={55} />
						</a>
						<a
							href={'https://x.com/devarekusandoru'}
							rel='noopener noreferrer'
							target='_blank'
						>
							<Twitter size={55} />
						</a>
						<a
							href={'https://www.linkedin.com/in/amuresan5833'}
							rel='noopener noreferrer'
							target='_blank'
						>
							<Linkedin size={55} />
						</a>
					</div>
				</FadeInSection>
				{/* Contact */}
				<FadeInSection
					start={3000}
					animated={width < 1024}
					className='container py-[10px] px-[15px] row-start-12 md:col-start-3 md:row-start-6 lg:col-start-3 lg:row-start-4 col-span-2'
					id='contact'
				>
					<h2 className=''>Contact</h2>
					<form
						action='https://formsubmit.co/866be482be147e891bbcd78d86795959'
						method='POST'
						className='h-full flex flex-col p-[5px]'
					>
						<div className=' flex flex-row justify-between gap-x-3'>
							<div class='contact-div'>
								<input
									class='contact-input'
									name='name'
									id='name'
									type='text'
									required
								/>
								<label class='contact-label' for='name'>
									<span class='contact-label-content'>
										Name
									</span>
								</label>
							</div>
							<div class='contact-div'>
								<input
									class='contact-input'
									name='email'
									id='email'
									type='email'
									required
								/>
								<label class='contact-label' for='email'>
									<span class='contact-label-content'>
										Email
									</span>
								</label>
							</div>
						</div>
						<div className='flex flex-row flex-1 mt-3 gap-x-3'>
							<textarea
								name='message'
								placeholder='Message'
								required
								className='flex-1 text-[15px] w-full border-2 px-[6px] py-[4px] rounded-lg bg-white dark:bg-black border-gray-200 focus:border-black dark:border-[#FFFFFF33] dark:focus:border-gray-200 focus:outline-none resize-none transition-colors ease-in-out duration-300'
							/>
							<button
								type='submit'
								className='flex flex-row items-center justify-center w-[50px] h-full border border-white hover:border-black dark:border-black dark:hover:border-white bg-black hover:bg-white dark:bg-white dark:hover:bg-black text-white hover:text-black dark:text-black dark:hover:text-white rounded-lg transition-colors ease-out duration-300'
							>
								<SendHorizonal size={22} />
							</button>
						</div>
					</form>
				</FadeInSection>
				{/* how it works */}
				<FadeInSection
					start={3500}
					animated={width < 1024}
					className='container py-[6px] md:row-start-1 md:col-start-3 lg:col-start-2 lg:row-start-1'
					id='how-it-works'
				>
					<h2>Get Started</h2>
					<ul
						id='get-started'
						className='h-full w-full justify-center pl-[10px] pr-[6px] py-[6px] pb-[20px]'
					>
						<li>
							<div className='ul-bullet'>1</div>
							<p>Download the app</p>
						</li>
						<li>
							<div className='ul-bullet'>2</div>
							<p>Create an account</p>
						</li>
						<li>
							<div className='ul-bullet'>3</div>
							<p className='text-left'>Add your partner</p>
						</li>
						<li>
							<div className='ul-bullet'>4</div>
							<p>Start sharing moments</p>
						</li>
					</ul>
				</FadeInSection>
				{/* FAQs */}
				<FadeInSection
					start={4000}
					animated={width < 1024}
					className='container flex-col justify-end items-center p-[10px] lg:col-start-5 lg:row-start-4'
					id='faqs'
				>
					<button
						onClick={() => {
							alert('FAQs coming soon!');
						}}
						className='flex flex-row flex-wrap w-full h-full items-center pt-[10px] justify-center'
					>
						<MessagesSquare size={60} />
					</button>
					<h2 className='mt-4'>Explore FAQs</h2>
				</FadeInSection>
				{/* Privacy */}
				<FadeInSection
					start={4500}
					animated={width < 1024}
					className='container justify-center items-center px-[20px] lg:col-start-6 lg:row-start-4'
					id='privacy'
				>
					<GlobeLock size={60} />
					<p className='mt-2 max-w-[160px]'>
						Your privacy is our top priority.{' '}
						<a
							href='https://www.termsfeed.com/live/c29a889a-a82b-49a3-a426-2c51020c0b7f'
							target='_blank'
							rel='noopener noreferrer'
							className='font-bold underline'
						>
							Learn More
						</a>
					</p>
				</FadeInSection>
				{/* More */}
				<FadeInSection
					start={5000}
					animated={width < 1024}
					className='container flex-col justify-end items-center p-[10px] md:row-start-3 md:col-start-1 lg:col-start-6 lg:row-start-1'
					id='more'
				>
					<a
						href='https://alexandrumuresan.dev#projects'
						rel='noopener noreferrer'
						className='flex flex-row flex-wrap w-full h-full items-center pt-[10px] justify-center gap-x-3 md:gap-x-4 lg:gap-x-5 gap-y-2'
						target='_blank'
					>
						<img
							src='https://alexandrumuresan.dev/img/TDIH.png'
							alt='TDIH'
							className='w-[65px] h-[65px] border border-gray-200 rounded-2xl'
						/>
						<img
							src='https://alexandrumuresan.dev/img/prayer-circle.png'
							alt='Prayer Circle'
							className='w-[65px] h-[65px]'
						/>
					</a>
					<h2 className=''>More Projects</h2>
				</FadeInSection>
			</main>
		</div>
	);
}

export default App;
