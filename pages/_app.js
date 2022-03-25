import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import {SessionProvider} from "next-auth/react";
import {ToastContainer} from "react-toastify";

function Chatn({ Component, pageProps: { session, ...pageProps } }) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <SessionProvider session={session}>
            {getLayout(<Component {...pageProps} />)}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
            />
        </SessionProvider>
    )
}

export default Chatn
