import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Mady by Radicals | We&apos;re building bold impactful products.</title>
                <meta charSet='utf-8'></meta>
                <meta httpEquiv='x-ua-compatible' content='ie=edge'></meta>

                <meta name='description' content="We're building bold impactful products." />
                <meta name='author' content='Made by Radicals'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest'></link>
            </Head>

            <main className={styles.main}>
                <article className={styles.fold}>
                    <div className={styles.hi}>
                        {' '}
                        <Image src='/logo.svg' width={'110'} height={'110'} alt='Made by Radicals logo' />
                    </div>
                    <div className={styles.center}>
                        <div>
                            <h1 className={styles.headline + ' ' + inter.className + ' ' + styles.fadeIn}>
                                We&apos;re building bold impactful products.
                            </h1>
                        </div>
                    </div>
                    {/* <div className={styles.bottom}>
                       
                    </div> */}
                </article>
                <article className={styles.background}>
                    <div>
                        <h3>Team background</h3>
                    </div>
                    <div>
                        <p>
                            With a solid background in developing bleeding-edge apps and deep tech solutions, we&apos;re focused on making a
                            real difference. Our radical approach helps us stand out, as we bring together our diverse talents to create
                            impactful and purpose-driven products. Motivated to improve the industry, we offer a fresh and grounded
                            perspective that encourages positive change.
                        </p>
                        <svg fill='none' viewBox='0 0 161.768 40.771' className={styles.trezorLogo}>
                            <path
                                fill='currentColor'
                                d='M24.306 9.461C24.306 4.29 19.761 0 14.228 0 8.694 0 4.148 4.292 4.148 9.46v3.025H0v21.75l14.225 6.536 14.233-6.534V12.581H24.31l-.003-3.121Zm-15.02 0c0-2.438 2.175-4.389 4.942-4.389 2.767 0 4.94 1.951 4.94 4.389v3.024H9.287V9.461Zm13.44 21.264-8.502 3.904-8.499-3.901V17.655h17v13.07z'
                            ></path>
                            <path
                                fill='currentColor'
                                d='M40.019 12.485h17.886v5.17h-6.127v16.678h-5.731V17.655h-6.028ZM78.46 19.8c0-4.39-3.064-7.218-7.609-7.218H60.474v21.75h5.732v-7.314h2.174l4.051 7.314h6.627l-4.842-8.094c2.07-.78 4.244-2.83 4.244-6.438zm-8.296 2.146h-3.958v-4.39h3.953c1.482 0 2.47.879 2.47 2.147 0 1.365-.988 2.243-2.47 2.243zm10.963-9.461h16.009v5.072H86.858v3.219h9.982v4.974h-9.982v3.51h10.278v5.073H81.127Zm48.125-.294c-6.719 0-11.46 4.78-11.46 11.218 0 6.437 4.839 11.22 11.46 11.22s11.562-4.779 11.562-11.217c0-6.438-4.842-11.22-11.562-11.22zm0 17.363c-3.359 0-5.633-2.536-5.633-6.14 0-3.707 2.274-6.142 5.633-6.142 3.36 0 5.732 2.537 5.732 6.141 0 3.605-2.372 6.14-5.732 6.14zm27.67-3.316c2.074-.78 4.25-2.83 4.25-6.438 0-4.39-3.064-7.218-7.61-7.218h-10.375v21.75h5.731v-7.314h2.178l4.051 7.314h6.621zm-4.052-4.292h-3.952v-4.39h3.952c1.484 0 2.471.879 2.471 2.147 0 1.365-.987 2.243-2.471 2.243zm-52.967-9.461h16.898v4.389l-9.19 12.29h9.19v5.169H99.903v-4.39l9.19-12.288h-9.19z'
                            ></path>
                        </svg>
                        <svg viewBox='0 0 185 22' fill='#ffffff' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M57.0741 12.6756L53.0786 11.8501C49.5263 11.1481 47.2721 9.26562 47.2721 6.07935C47.2721 1.99816 50.1948 0 55.535 0C60.8752 0 63.7202 2.08302 63.7202 6.17193V6.60397H59.3283V6.28766C59.3283 4.44379 58.1001 3.57972 55.535 3.57972C52.9698 3.57972 51.695 4.40522 51.695 5.97135C51.695 7.11315 52.4102 7.8615 54.1902 8.20867L58.2323 9.06502C61.7458 9.7748 64 11.6572 64 14.7586C64 18.9941 60.7974 21 55.5039 21C50.2103 21 47 18.917 47 14.8281V14.396H51.3919V14.6661C51.3919 16.5562 52.8921 17.4126 55.5039 17.4126C58.1157 17.4126 59.6159 16.5948 59.6159 14.9438C59.6081 13.8174 58.8541 12.9919 57.0741 12.6756Z'
                                fill='#ffffff'
                            />
                            <path
                                d='M87 14.1646C86.588 18.6392 83.2594 21 78.0404 21C72.5709 21 69 18.2921 69 13.1462V7.80749C69 2.63079 72.5709 0 78.0404 0C83.5099 0 87 2.63079 87 7.80749V11.8501H73.605V13.3931C73.605 15.7461 75.1643 17.1965 78.0404 17.1965C80.9165 17.1965 82.1526 15.9004 82.395 14.1106L87 14.1646ZM73.605 8.51727H82.4354V7.53747C82.4354 4.98384 80.7145 3.76488 78.0404 3.76488C75.3663 3.76488 73.605 4.98384 73.605 7.53747V8.51727Z'
                                fill='#ffffff'
                            />
                            <path
                                d='M93 7.95657C93 2.68102 96.5677 0 102.032 0C107.497 0 111 2.68102 111 7.95657V21H106.439V7.68139C106.439 5.079 104.72 3.83677 102.048 3.83677C99.3767 3.83677 97.609 5.079 97.609 7.68139V21H93V7.95657Z'
                                fill='#ffffff'
                            />
                            <path
                                d='M122.393 13.4119C122.393 16.822 123.487 17.4694 128 16.9878V20.6822C119.754 22.0479 118.056 18.914 118.056 13.1671V3.85226H113V0H127.977V3.85226H122.37L122.393 13.4119Z'
                                fill='#ffffff'
                            />
                            <path
                                d='M163 14.1646C162.588 18.6392 159.259 21 154.04 21C148.571 21 145 18.2921 145 13.1462V7.80749C145 2.63079 148.571 0 154.04 0C159.51 0 163 2.63079 163 7.80749V11.8501H149.597V13.3931C149.597 15.7461 151.164 17.1965 154.04 17.1965C156.917 17.1965 158.145 15.9004 158.395 14.1106L163 14.1646ZM149.597 8.51727H158.435V7.53747C158.435 4.98384 156.706 3.76488 154.04 3.76488C151.374 3.76488 149.597 4.98384 149.597 7.53747V8.51727Z'
                                fill='#ffffff'
                            />
                            <path
                                d='M167 7.95657C167 2.68102 170.571 0 176.04 0C181.51 0 185 2.68102 185 7.95657V21H180.435V7.68139C180.435 5.079 178.706 3.83677 176.04 3.83677C173.374 3.83677 171.597 5.079 171.597 7.68139V21H167V7.95657Z'
                                fill='#ffffff'
                            />
                            <path d='M138 0H134V20H138V0Z' fill='#ffffff' />
                            <path
                                d='M0 12.9388L9.05426 4L15.0155 9.8852L20.9767 4L26.938 9.8852L32.8992 4L36 7.05357L26.938 16L20.9767 10.1148L15.0155 16L9.05426 10.1148L3.09302 16L0 12.9388Z'
                                fill='#ffffff'
                            />
                        </svg>
                    </div>
                </article>
                <article className={styles.contact}></article>
            </main>
        </>
    );
}
