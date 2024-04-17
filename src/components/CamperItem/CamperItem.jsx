import { Item, ImgWrapper, Properties, TitleWrapper, Title, Price } from "./CamperItem.styled"

const CamperItem = () => {
    return (
        <Item>
            <ImgWrapper><img src="" alt="" /></ImgWrapper>
            <Properties>
                <TitleWrapper>
                    <Title>Mavericks</Title>
                    <Price>€8000.00</Price>
                    <span>+</span>
                </TitleWrapper>
                <div>
                    <div></div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <p>disc</p>
                <button>Show more</button>
            </Properties>
        </Item>
    )
}

export default CamperItem;