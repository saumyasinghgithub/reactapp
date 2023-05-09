import { Container } from "react-bootstrap";
const DefaultLayout = ({children}) => {
    return <>
        <Container>
        {children}
        </Container>        
    </>
}
export default DefaultLayout;