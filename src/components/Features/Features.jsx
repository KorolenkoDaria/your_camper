import { WrapperEl, UlEl, LiEl, Title, Table, TdLeft, TdRight, TbodyEl } from "./Features.styled"

const Features = ({ camper }) => {

    const keys = Object.keys(camper.details);
    console.log(keys);
    let characteristics = [{ name: 'adults', value: camper.adults + ' adults' }, { name: "engine", value: camper.engine }, { name: "transmission", value: camper.transmission }];

    for (let key in camper.details) {
        if (key === "TV" || key === "bathroom") { // під ці характеристики немає іконок, тому не виводжу
            continue
        }
        if (camper.details.hasOwnProperty(key)) {
            if (camper.details[key]) {
                let value = key;
                if (key === "beds" || key === "hob" || key === "airConditioner") {
                    value = camper.details[key] + " " + key;
                }
                characteristics.push({
                    name: key.toLowerCase(),
                    value: value
                });
            }
        }
    }
    console.log("characteristics", characteristics);
    return (
        <WrapperEl>
            <UlEl>{characteristics.map((el, index) =>
                <LiEl className={`feature ${el.name}`}>{el.value}</LiEl>
            )}</UlEl>
            <Title>Vehicle details</Title>
            <Table>
                <TbodyEl>
                    <tr>
                        <TdLeft>Form</TdLeft>
                        <TdRight>{camper.form.charAt(0).toUpperCase() + camper.form.slice(1)}</TdRight>
                    </tr>
                    <tr>
                        <TdLeft>Length</TdLeft>
                        <TdRight>{camper.length}</TdRight>
                    </tr>
                    <tr>
                        <TdLeft>Width</TdLeft>
                        <TdRight>{camper.width}</TdRight>
                    </tr>
                    <tr>
                        <TdLeft>Height</TdLeft>
                        <TdRight>{camper.height}</TdRight>
                    </tr>
                    <tr>
                        <TdLeft>Tank</TdLeft>
                        <TdRight>{camper.tank}</TdRight>
                    </tr>
                    <tr>
                        <TdLeft>Consumption</TdLeft>
                        <TdRight>{camper.consumption}</TdRight>
                    </tr>
                </TbodyEl>
            </Table>

        </WrapperEl>
    )
}
export default Features;