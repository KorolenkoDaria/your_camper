import Button from "../Button/Button";
import { Wrapper, Title, SubTitle, FormEl, Field, LabelEl, InputEl, TextareaEl } from "./FormModal.styled";

const FormModal = () => {
    return (
        <Wrapper>
            <Title>Book your campervan now</Title>
            <SubTitle>Stay connected! We are always ready to help you.</SubTitle>
            <FormEl >
                <Field>
                    <LabelEl htmlFor="name"   >
                        <InputEl type="text" name="name" id="name" placeholder="Name" />
                    </LabelEl>
                </Field>
                <Field>
                    <LabelEl htmlFor="email"  >
                        <InputEl type="email" name="email" id="email" placeholder="Email" />
                    </LabelEl>
                </Field>
                <Field>
                    <LabelEl htmlFor="datepicker">
                        <InputEl type="text" id="datepicker" placeholder="Booking date" />
                    </LabelEl>
                </Field>
                <Field>
                    <LabelEl htmlFor="comment">
                        <TextareaEl id="comment" name="comment" placeholder="Сomment">
                        </TextareaEl>
                    </LabelEl>
                </Field>
                <Button type="submit">Send</Button>
            </FormEl>
        </Wrapper>
    )
}
export default FormModal;