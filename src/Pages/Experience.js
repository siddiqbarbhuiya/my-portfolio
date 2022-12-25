import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work"

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3b444c">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3b444c", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rowlands Memorial High School, Assam
          </h3>
          <p>10 <sup>th</sup> Standard</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3b444c", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Karimganj Junior Science College, Assam
          </h3>
          <p>12 <sup>th</sup> Standard</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2020"
          iconStyle={{ background: "#3b444c", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            L.C. Bharali College, Guwahati, Assam
          </h3>
          <p>B.S in Information Technology</p>
        </VerticalTimelineElement>


        {/* work experince */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov-2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Coding Bootcamp | Intern.
          </h3>
          <p>Newton School, Bangalore, Karnataka</p>
          <ul>
            <li>Full Stack Web Development along with Problem Solving.</li>
            <li>Technical Stack learnt: React JS, HTML, CSS, JavaScript and Bootstrap.</li>
            <li>Worked on various projects like FB login page, Tip Calculator etc.</li>
            <li>Participated in various Coding contest organized by the platform.</li>
          </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec - 2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Customer Service Representative.
          </h3>
          <p>Malomatia India Pvt. Ltd, Pune, Maharastra</p>
          <ul>
            <li>Provide solutions for products subscription related issues.</li>
            <li>Help IT firms to subscribe for the respective product, needed for the manufacturing the items for smart solutions.</li>
            <li>Guide people, resolve their queries within the SLA’s time given. </li>
          </ul>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default Experience;
