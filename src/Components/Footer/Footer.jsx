import style from "./Footer.module.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <a href=""><WhatsAppIcon className={style.icon}/></a>
      <a href=""><FacebookIcon className={style.icon}/></a>
      <a href=""><InstagramIcon className={style.icon}/></a>
    </div>
  )
}

export default Footer
