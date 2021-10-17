import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__title">
                <h1>TSPORT</h1>
                <h3>Mọi thông tin liên hệ vui lòng liên hệ qua email </h3>
                <p>nơi cung cấp các mặt hàng về quần áo các loại uy tín chất lượng hàng đầu hiện nay</p>
            </div>
            <div className="contact__body">
                <form action="">
                    <div className="input-form">

                        <Input label="email" 
                        type="email"
                        id="email"
                        placeholder="Enter Email" />
                    </div>
                    <Button size="sm">Gửi</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact
