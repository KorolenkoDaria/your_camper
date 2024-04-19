import { Field, LabelElement, InputElement } from './Location.styled';

import { ReactComponent as IconLocation } from "../../assets/icons/point.svg";

const Location = () => {
    return (
        <Field>
            <LabelElement>
                Location
            </LabelElement>
            <InputElement type="text" name="location" required placeholder="City" />
        </Field>
    );
}

export default Location;
