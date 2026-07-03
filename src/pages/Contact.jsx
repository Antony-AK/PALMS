import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const [loading,setLoading] = useState(false);


  useEffect(()=>{

    const ctx = gsap.context(()=>{

      gsap.fromTo(
        ".contact-reveal",
        {
          opacity:0,
          y:14
        },
        {
          opacity:1,
          y:0,
          duration:0.7,
          ease:"power2.out",
          stagger:0.15,

          scrollTrigger:{
            trigger:sectionRef.current,
            start:"top 80%",
            once:true
          }
        }
      )


    },sectionRef)


    return ()=>ctx.revert();

  },[])



  const handleSubmit = async(e)=>{

    e.preventDefault();

    setLoading(true);


    const formData = new FormData(e.target);


    // 🔥 UPDATE YOUR NEW WEB3FORMS KEY HERE
    formData.append(
      "access_key",
      "06a5404f-769b-493c-91b4-3afdac2b1d90"
    );


    formData.append(
      "subject",
      "New PALMS Contact Enquiry"
    );


    formData.append(
      "from_name",
      "PALMS Website"
    );


    formData.append(
      "from_email",
      formData.get("email")
    );

    formData.append(
  "Enquiry Type",
  formData.get("enquiryType")
);


    try{


      const res = await fetch(
        "https://api.web3forms.com/submit",
        {
          method:"POST",
          body:formData
        }
      );


      const data = await res.json();

      console.log("FORM RESPONSE:",data);



      if(data.success){

        toast.success(
          "Message sent successfully 🚀"
        );

        e.target.reset();

      }
      else{

        toast.error(
          data.message || "Something went wrong ❌"
        );

      }



    }
    catch(error){

      console.log(error);

      toast.error(
        "Error submitting form ⚠️"
      );

    }
    finally{

      setLoading(false);

    }


  }



return (

<section

ref={sectionRef}

className="
relative
w-full
min-h-screen
bg-[#f5f7fb]
px-5
md:px-8
py-20
overflow-hidden
"


>


<div className="relative z-10">


{/* HERO */}


<div

className="
contact-reveal
mb-20
text-white
p-10
md:p-20
bg-palms-gradient
rounded-2xl
"

>


<span className="text-xs text-white/60">

Contact PALMS

</span>



<h1

className="
mt-8
text-4xl
md:text-6xl
font-semibold
leading-tight
"

>

Conversations that begin with intent

</h1>



<p className="mt-8 text-white/70 max-w-3xl">


PALMS welcomes thoughtful enquiries from individuals,
professionals and organisations seeking growth.


</p>


</div>






<div

className="
contact-reveal
bg-white
rounded-3xl
max-w-[1200px]
mx-auto
shadow-xl
p-8
md:p-14
"

>



{/* CAREER */}



<div className="mb-20">


<h2

className="
text-4xl
font-semibold
text-[var(--palms-blue)]
"

>

Get In Touch

</h2>


<p className="mt-5 text-gray-500">

Grow Together

</p>



<div className="grid md:grid-cols-3 gap-8 mt-12">


{[


{
id:"01",
title:"Join us, as a Member",
desc:
"If you are interested in becoming a Member of PALMS, please fill out the details below and we will contact you."
},


{
id:"02",
title:"Join us, as a Trainer",
desc:
"We would like to add qualified training professionals to our team who are interested in conducting training programs for our members and clients."
},


{
id:"03",
title:"Join us, as a Business Partner",
desc:
"If you have a strong professional network across business owners, executives, senior managers, you can promote selected services on a commission basis."
}

].map(item=>(


<div

key={item.id}

className="
bg-[#f9fafc]
rounded-2xl
p-8
border
border-gray-200
hover:shadow-xl
transition
"

>


<div

className="
w-10
h-10
rounded-full
bg-[var(--palms-blue)]/10
flex
items-center
justify-center
mb-5
"

>

{item.id}

</div>


<h3

className="
font-semibold
text-[var(--palms-blue)]
mb-4
"

>

{item.title}

</h3>


<p className="text-sm text-gray-500">

{item.desc}

</p>


</div>


))}


</div>


</div>








{/* FORM */}


<div className="grid md:grid-cols-2 gap-14">



<form

onSubmit={handleSubmit}

className="space-y-6"

>


<input
name="name"
placeholder="Your Name"
required
className="input-style"
/>



<input
name="company"
placeholder="Company Name"
className="input-style"
/>

{/* ENQUIRY TYPE */}

<div>

  <select
    name="enquiryType"
    required
    className="input-style"
    defaultValue=""
  >
    <option value="" disabled>
      Choose Enquiry Type
    </option>

    <option value="Member">
      Become a Member
    </option>

    <option value="Trainer">
      Become a Trainer
    </option>

    <option value="Business Partner">
      Become a Business Partner
    </option>

    <option value="General Enquiry">
      General Enquiry
    </option>
  </select>
</div>


<input
name="phone"
placeholder="Phone Number"
required
className="input-style"
/>


<input
name="email"
type="email"
placeholder="Email Address"
required
className="input-style"
/>



<textarea

name="message"
rows="5"
placeholder="Message"
required
className="input-style"

/>



<button

disabled={loading}

className="
bg-[var(--palms-blue)]
text-white
px-10
py-4
rounded-full
"

>


{
loading
?
"Sending..."
:
"Send Message"
}


</button>


</form>






<div

className="
bg-[var(--palms-blue)]
text-white
rounded-3xl
p-10
flex
flex-col
justify-between
"

>


<div>

<h3 className="text-2xl font-semibold">

We respond personally

</h3>


<p className="mt-6 text-white/70">


Every enquiry is read carefully and answered with intention.


</p>

</div>




<div className="mt-10 text-white/60 space-y-3">

<p>PALMS Training & Consulting</p>

<p>Thoothukudi · Tamil Nadu</p>

<p>0461-2330856 · 82203 44477</p>

<p>info@palmsindia.org</p>


</div>



</div>



</div>




</div>



</div>


</section>

)


}


export default Contact;