import React, { useState } from "react";


const UserPanelNavbar = () => {
  // const [show,setShow] = useState(false)
  return (
    <React.Fragment>
      <section>
        <div className='shadow-md z-[100] h-[50px] w-full flex items-center pl-10 space-x-4 fixed'>
            {/* <div>
            <BsBook className='text-textColor text-4xl'/>
            </div> */}

            <div>
            <p className='text-textColor text-3xl'>Нүүр</p>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserPanelNavbar;