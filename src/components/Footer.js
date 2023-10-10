import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{display:"flex",alignItems:"end"}}>
        <div  className='footer'>
                <div className='footer1'>
                <div className='f1'>
                    <p style={{fontWeight:"700"}}>О нас</p>
                    <Link className='link'><p>Пункты выдачи</p></Link>
                    <Link className='link'><p>Вакансии </p></Link>
                 </div>
                 <div className='f1'>
                 <p style={{fontWeight:"700"}}>Пользователям</p>
                    <Link className='link'><p>Пункты выдачи</p></Link>
                    <Link className='link'><p>Вакансии </p></Link>
                    </div>
                 <div className='f1'>
                 <p style={{fontWeight:"700"}}>Дляредпринимателей</p>
                    <Link className='link'><p>Пункты выдачи</p></Link>
                    <Link className='link'><p>Вакансии </p></Link>
                 </div>
                </div>
                <div className="footer2">
                    <div className='f1'>
                        <p>Скачать приложение</p>
                        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                        <img style={{width:"100px"}} src="https://www.dbs.com/in/credit-cards/assets/images/vantage/home/Vector-Smart-Object-01.png" alt="" />
                        <img style={{width:"100px"}} src="https://www.callmewine.com/images/playstore.fd34288a.svg" alt="" />
                        </div>
                    </div>
                    <div className='f1'>
                        <p>
                            Uzum в соцсетях</p>
                            <div style={{display:"flex",alignItems:"center"}}>
                                <img style={{width:"30px"}} src="https://abrakadabra.fun/uploads/posts/2022-03/1647900753_16-abrakadabra-fun-p-znak-instagram-v-vektore-43.png" alt="" />
                                <img style={{width:"50px"}} src="https://img2.freepng.ru/20180605/ef/kisspng-telegram-encapsulated-postscript-transfer-5b170605610126.3859681215282355253974.jpg" alt="" />
                                <img style={{width:"30px"}} src="https://avatars.mds.yandex.net/i?id=1f698ba33e3f504dc37a19aba49c1672519125ed-9858735-images-thumbs&n=13" alt="" />
                                <img style={{width:"40px"}} src="https://fikiwiki.com/uploads/posts/2022-02/1645006107_3-fikiwiki-com-p-kartinki-feisbuk-4.png" alt="" />
                            </div>
                    </div>
                </div>
                <br />
                <hr />
                <div className="footer3">
               <h5 style={{fontSize:"15px"}}> Соглашение о конфиденциальности
Пользовательское соглашение</h5>
<h6 style={{color:"grey"}}>«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</h6>
                </div>
        </div>
    </div>
  )
}
