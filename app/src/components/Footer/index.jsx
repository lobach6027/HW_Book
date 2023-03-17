import React from "react";
import s from "./style.module.css";
export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
      <img src="images/IMAGE.png" alt="logo" />
      <div className={s.social}>
         <div className={s.social_logo}><img src="images/fcb.png" alt="facebook" /></div>
         <div className={s.social_logo}><img src="images/twt.png" alt="twiter" /></div>
         <div className={s.social_logo}><img src="images/lnd.png" alt="ln" /></div>
         <div className={s.social_logo}><img src="images/inst.png" alt="instagram" /></div>
        </div>
      </div>
      <div>
        <p className={s.title}>Explore</p>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>Home</div>
        </div>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>About</div>
        </div>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>Articles</div>
        </div>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>Our Store</div>
        </div>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>Contact Us</div>
        </div>
      </div>
      <div>
        <p className={s.title}>Utility Pages</p>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>Style Guide</div>
        </div>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>404 Not Found</div>
        </div>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>Password Protected</div>
        </div>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>Licenses</div>
        </div>
        <div className={s.text}>
            <div className={s.points}>
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            <img src="images/small_point.png" alt="" />
            </div>
            <div className={s.info}>Changelog</div>
        </div>
      </div>
      <div>
      <p className={s.title}>Keep in Touch</p>
        <div className={s.contacts}>
          <div className={s.contacts_title}>Address :</div>
          <div className={s.contacts_text}>24A Kingston St, Los Vegas Width NC 28202, USA.</div>
        </div>
        <div className={s.contacts}>
          <div className={s.contacts_title}>Mail :</div>
          <div className={s.contacts_text}>support@pages.com</div>
        </div>
        <div className={s.contacts}>
          <div className={s.contacts_title}>Phone :</div>
          <div className={s.contacts_text}>(+22) 123 - 4567 - 900</div>
        </div>
      </div>
    </div>
  );
}
