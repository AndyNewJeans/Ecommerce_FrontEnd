import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";

const CenteredContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
});

export default function Loading() {
    return (
        <CenteredContainer>
            <FontAwesomeIcon icon={faSpinner} size="3x" spin />
        </CenteredContainer>
    );
}
