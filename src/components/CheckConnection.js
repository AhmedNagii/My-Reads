import { Detector } from "react-detect-offline";
import wifiOffImg from "../imgs/wifi-off.png"


const CheckConnection = ({children}) =>  {

    return (<div> <Detector
            render={({ online }) => (
                online === true ?
                 children :
                    <div style={{ paddingTop: "10px", textAlign: "center" }} >
                        <img 
                         alt="No internet connection"
                         src={wifiOffImg}
                          style={{ paddingTop: "10px", textAlign: "center" }} />
                        <h1 style={{ marginBottom: '5px' }}>No Connection</h1>
                        <h1 style={{ marginBottom: '0' }}>Please check your internt Connection</h1>
                    </div>
     ) }
        />
    </div>)

}

 export default CheckConnection;