import React from 'react'
import styles from '../../styles/styles'

const CheckoutSteps = ({active}) => {
    console.log(active);
  return (
    <div className='w-full flex justify-center'>
        <div className="w-[95%] 800px:w-[50%] flex items-center flex-wrap ">
               <div className={`${styles.noramlFlex}`}>
                <div className={`${styles.cart_button}`}>
                       <span className={`${styles.cart_button_text}`}>1.Expédition</span>
                </div>
                <div className={`${
                    active > 1 ? "w-[20px] 700px:w-[60px] h-[3px] !bg-[#FFDFC0]"
                    : "w-[20px] 700px:w-[60px] h-[3px] !bg-[#F59A45]"
                }`} />
               </div>

               <div className={`${styles.noramlFlex}`}>
                <div className={`${active > 1 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#FFDFC0]`}`}>
                    <span className={`${active > 1 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#F59A45]`}`}>
                        2.Paiement
                    </span>
                </div>
               </div>

               <div className={`${styles.noramlFlex}`}>
               <div className={`${
                    active > 3 ? "w-[20px] 700px:w-[60px] h-[3px] !bg-[#FFDFC0]"
                    : "w-[20px] 700px:w-[60px] h-[3px] !bg-[#FFDFC0]"
                }`} />
                <div className={`${active > 2 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#FFDFC0]`}`}>
                    <span className={`${active > 2 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#F59A45]`}`}>
                        3.Succès
                    </span>
                </div>
               </div>
        </div>
    </div>
  )
}

export default CheckoutSteps