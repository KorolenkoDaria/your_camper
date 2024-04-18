
import { Field, LabelElement, InputElement } from './Location.styled'

const Location = () => {
    return (
        <Field>
            <LabelElement>
                Location
            </LabelElement>
            <InputElement type="text" name="location" required placeholder='City' />
        </Field>
    );
}

export default Location;
