import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";
import { GiCutDiamond } from "react-icons/gi";
const policy = [{
        name: "Miễn phí giao hàng",
        description: "Miễn phí ship với đơn hàng > 239K",
        icon: AiOutlineShoppingCart
    },
    {
        name: "Thanh toán COD",
        description: "Thanh toán khi nhận hàng (COD)",
        icon: BsFillCreditCard2BackFill
    },
    {
        name: "Khách hàng VIP",
        description: "Ưu đãi dành cho khách hàng VIP",
        icon: GiCutDiamond
    },
    {
        name: "Hỗ trợ bảo hành",
        description: "Đổi, sửa đồ tại tất cả store",
        icon: BiDonateHeart
    }
]

export default policy