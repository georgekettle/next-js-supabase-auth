import { Toaster } from 'react-hot-toast';
import ToastNotification from './ToastNotification';

export default function CustomToaster() {
    return(
        <Toaster>
            {(t) => (<ToastNotification type={t.type} title={t.message} />)}
        </Toaster>
    )
}