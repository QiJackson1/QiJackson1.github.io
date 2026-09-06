"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "site dark" : "site"}>
      <header className="topbar">
        <a className="brand" href="#about" aria-label="Back to home">Jason Qi</a>
        <nav aria-label="Primary navigation">
          <a className="active" href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#honors">Honors</a>
        </nav>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle light and dark mode">
          {dark ? "☀" : "◐"}
        </button>
      </header>

      <main className="page-shell">
        <aside className="profile-card">
          <Image className="portrait" src="/profile-speaking.jpg" alt="Kaijie Qi presenting at a conference" width={244} height={282} priority unoptimized />
          <h1>Kaijie Qi</h1>
          <p className="english-name">Jason Qi</p>
          <p className="role">PhD Candidate</p>
          <p className="affiliation">College of AI, Tsinghua University</p>
          <div className="contact-links">
            <a href="mailto:qkjtsinghua@163.com">Email</a>
            <a href="https://github.com/QiJackson1" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="interest-box">
            <h2>Research Interests</h2>
            <p>Reinforcement &amp; Imitation Learning</p>
            <p>WHole Body Control</p>
            <p>Exoskeletons &amp; Humanoid Robots</p>
            <p>PMSM Design &amp; Control</p>
          </div>
        </aside>

        <div className="content-column">
          <section id="about" className="intro-section">
            <p className="eyebrow">ROBOTICS · EMBODIED AI · MOTOR CONTROL</p>
            <h2>About Me</h2>
            <p>
              I am a PhD candidate in Computer Science and Technology at the College of AI, Tsinghua University. My research focuses on
              <strong> reinforcement learning, imitation learning, and embodied motion control for robots</strong>. I received my master&apos;s degree from
              Tsinghua&apos;s Department of Mechanical Engineering, where I built full-stack R&amp;D experience spanning mechanical design,
              electric motors, and algorithms for exoskeleton robots, specialized motors, and sensorless control.
            </p>
            <p>
              I build robotic systems for the real world: algorithms that respect hardware constraints, and electromechanical designs
              that create better conditions for learning-based control.
            </p>
            <div className="metrics" aria-label="Career highlights">
              <div><strong>2</strong><span>Publications</span></div>
              <div><strong>5+</strong><span>Invention Patents</span></div>
              <div><strong>99%</strong><span>Multi-Terrain Walking Success</span></div>
              <div><strong>1st</strong><span>Master&apos;s Overall Ranking</span></div>
            </div>
          </section>

          <section id="publications">
            <div className="section-heading">
              <div><span>RESEARCH</span><h2>Selected Publications</h2></div>
              <span className="section-count">02 / PUBLICATIONS</span>
            </div>
            <article className="publication-card featured">
              <div className="pub-year">2026</div>
              <div>
                <h3>Design and Cableless Close-Loop Control of a Separated-Structure Magnetic Actuator with Large Air Gap for Confined-Space Application</h3>
                <p className="authors"><strong>Kaijie Qi</strong>, Yunzhi Chen, Zhenguo Nie</p>
                <p className="venue">IEEE Transactions on Mechatronics</p>
                <p>Designed a separated-structure magnetic actuator with a large air gap and developed a cableless closed-loop control method for confined-space applications.</p>
                <a className="paper-link" href="https://ieeexplore.ieee.org/document/11618735" target="_blank" rel="noreferrer">View Paper ↗</a>
              </div>
            </article>
            <article className="publication-card">
              <div className="pub-year">2024</div>
              <div>
                <h3>Design and Development of a Five-Degree-of-Freedom Knee Joint Rehabilitation Robot with Multimode Signal Monitoring</h3>
                <p className="authors"><strong>Kaijie Qi</strong>, Dai Li, Handing Xu, Zikang Li, Hongshi Huang, Zhenguo Nie</p>
                <p className="venue">17th International Conference on Intelligent Robotics and Applications (ICIRA), Oral</p>
                <p>Developed a five-degree-of-freedom serial underactuated rehabilitation mechanism with real-time multimodal monitoring of joint torque, angle, speed, and EMG signals.</p>
                <a className="paper-link" href="https://doi.org/10.1007/978-981-96-0792-1_27" target="_blank" rel="noreferrer">DOI ↗</a>
              </div>
            </article>
          </section>

          <section id="projects" className="preview-projects">
            <div className="section-heading"><div><span>ENGINEERING</span><h2>Selected Projects</h2></div></div>
            <div className="project-grid">
              <article>
                <span className="project-index">01</span>
                <h3>Exoskeleton Robotics &amp; Embodied Control</h3>
                <p>Built a reinforcement-learning motion-control system with Isaac Lab and rsl_rl, covering robot design, URDF modeling, and multi-terrain locomotion policies.</p>
                <div className="tags"><span>Isaac Lab</span><span>RL</span><span>AMP</span></div>
              </article>
              <article>
                <span className="project-index">02</span>
                <h3>Sensorless Control for Large-Air-Gap Motors</h3>
                <p>Designed the electromagnetic structure of a specialized motor and implemented flux observation and sensorless closed-loop speed control.</p>
                <div className="tags"><span>PMSM</span><span>FOC</span><span>SMO</span></div>
              </article>
              <article>
                <span className="project-index">03</span>
                <h3>Humanoid Robot Joint Modules</h3>
                <p>Designed frameless torque motors for varied joint loads, integrated dual-side magnetic encoders, and implemented position, speed, and torque control on STM32.</p>
                <div className="tags"><span>Motor Design</span><span>STM32</span><span>FOC</span></div>
              </article>
              <article>
                <span className="project-index">04</span>
                <h3>Knee Stretching Rehabilitation Exoskeleton</h3>
                <p>Designed a five-DOF anatomically adaptive mechanism and multimodal sensing system, including compact actuation, full mechanical integration, and real-time monitoring software.</p>
                <div className="tags"><span>Exoskeleton</span><span>Arduino</span><span>EMG</span></div>
              </article>
            </div>
          </section>

          <section id="experience">
            <div className="section-heading"><div><span>JOURNEY</span><h2>Education &amp; Experience</h2></div></div>
            <div className="timeline">
              <article>
                <div className="time">Sep 2026 — Present</div>
                <div><h3>Tsinghua University · College of AI</h3><p className="timeline-role">PhD Candidate · Computer Science and Technology</p><p>Full-stack research in reinforcement learning, imitation learning, exoskeleton motors and systems, and embodied motion-control algorithms.</p></div>
              </article>
              <article>
                <div className="time">Mar 2025 — Jul 2025</div>
                <div><h3>HONOR Device Co., Ltd. · Humanoid Robotics</h3><p className="timeline-role">Motion Control Intern · First Intern in the Department</p><p>Contributed to humanoid robot joint modules, motor control, reducers, and full-body mechanical design.</p></div>
              </article>
              <article>
                <div className="time">Sep 2023 — Jun 2026</div>
                <div><h3>Tsinghua University · Department of Mechanical Engineering</h3><p className="timeline-role">M.S. in Mechanical Engineering</p><p>GPA: 3.82/4.0; ranked 5/76 by GPA and 1st overall in the second year.</p></div>
              </article>
              <article>
                <div className="time">Sep 2019 — Jun 2023</div>
                <div><h3>Zhengzhou University · School of Mechanical and Power Engineering</h3><p className="timeline-role">B.Eng. in Mechanical Engineering · Excellence Program</p><p>GPA: 3.77/4.0; ranked 2/299 by GPA and 1st overall for two consecutive academic years.</p></div>
              </article>
            </div>
          </section>

          <section id="patents">
            <div className="section-heading"><div><span>INVENTIONS</span><h2>Selected Patents</h2></div></div>
            <div className="patent-list">
              <article><span>CN117547439B</span><h3>Adaptive-Center Five-DOF Static Progressive Stretching Trainer for the Knee Joint</h3><em>Granted</em></article>
              <article><span>CN117618223B</span><h3>Knee Joint Static Progressive Stretching Trainer with an Integrated Signal Detection System</h3><em>Granted</em></article>
              <article><span>CN119244702A</span><h3>Cycloidal Pinwheel Reducer with a Hollow Structure</h3><em>Published</em></article>
              <article><span>CN121015293A</span><h3>Device and Method for Controlling the Extension Length of an Intramedullary Lengthening System</h3><em>Published</em></article>
              <article><span>CN117598768A</span><h3>Electromagnetically Driven Intramedullary Lengthening Nail with a Through-Hole Structure</h3><em>Published</em></article>
            </div>
          </section>

          <section id="honors">
            <div className="section-heading"><div><span>RECOGNITION</span><h2>Awards &amp; Honors</h2></div></div>
            <div className="honors-layout">
              <div className="honor-group">
                <h3>Academic Honors</h3>
                <ul>
                  <li><strong>National Scholarship</strong><span>2025 · Ranked 1st Overall</span></li>
                  <li><strong>Outstanding Thesis, Tsinghua University</strong><span>2026 · Top 1%</span></li>
                  <li><strong>Outstanding Graduate, Tsinghua University</strong><span>2026 · Top 5%</span></li>
                  <li><strong>National Scholarship</strong><span>2020, 2021 · Ranked 1st Overall</span></li>
                  <li><strong>Outstanding Thesis of Henan Province</strong><span>2024</span></li>
                </ul>
              </div>
              <div className="honor-group">
                <h3>Competitions</h3>
                <ul>
                  <li><strong>Tsinghua Medical-Engineering Innovation Competition</strong><span>Champion</span></li>
                  <li><strong>National Advanced Graphics Competition</strong><span>National First Prize</span></li>
                  <li><strong>National Marine Vehicle Design Contest</strong><span>National Second Prize</span></li>
                  <li><strong>Chinese Mathematics Competitions</strong><span>Provincial First Prize</span></li>
                  <li><strong>Tsinghua Craftsman Competition</strong><span>Third Place</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="toolkit" aria-labelledby="toolkit-title">
            <div><span>TOOLKIT</span><h2 id="toolkit-title">Technical Toolkit</h2></div>
            <div className="tool-cloud">
              {[
                "Isaac Lab", "rsl_rl", "Reinforcement Learning", "Imitation Learning", "AMP", "URDF",
                "MATLAB / Simulink", "PMSM", "FOC", "Sliding Mode Observer", "STM32", "Arduino",
                "Robot Mechanical Design", "Electromagnetic FEA", "Python", "Matplotlib"
              ].map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </section>

          <footer>
            <p>Let&apos;s connect over robotics, embodied intelligence, and high-performance motion control.</p>
            <a href="mailto:qkjtsinghua@163.com">qkjtsinghua@163.com ↗</a>
            <small>© 2026 Jason Qi · Built for robots that move beyond simulation.</small>
          </footer>
        </div>
      </main>
    </div>
  );
}
