"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "site dark" : "site"}>
      <header className="topbar">
        <a className="brand" href="#about" aria-label="返回首页">Jason Qi</a>
        <nav aria-label="主导航">
          <a className="active" href="#about">关于</a>
          <a href="#publications">论文</a>
          <a href="#projects">项目</a>
          <a href="#experience">经历</a>
          <a href="#honors">荣誉</a>
        </nav>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="切换深浅色模式">
          {dark ? "☀" : "◐"}
        </button>
      </header>

      <main className="page-shell">
        <aside className="profile-card">
          <Image className="portrait" src="/avatar.jpg" alt="戚凯杰证件照" width={244} height={282} priority unoptimized />
          <h1>戚凯杰</h1>
          <p className="english-name">Jason Qi</p>
          <p className="role">博士研究生 · 机器人研发</p>
          <p className="affiliation">清华大学人工智能学院</p>
          <div className="contact-links">
            <a href="mailto:qkjtsinghua@163.com">邮箱</a>
            <a href="https://github.com/QiJackson1" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="interest-box">
            <h2>研究方向</h2>
            <p>强化学习与模仿学习</p>
            <p>具身智能运动控制</p>
            <p>外骨骼与人形机器人</p>
            <p>永磁同步电机控制</p>
          </div>
        </aside>

        <div className="content-column">
          <section id="about" className="intro-section">
            <p className="eyebrow">ROBOTICS · EMBODIED AI · MOTOR CONTROL</p>
            <h2>关于我</h2>
            <p>
              我是清华大学人工智能学院计算机科学与技术博士生，研究聚焦
              <strong>强化学习、模仿学习与机器人具身运动控制</strong>。此前于清华大学机械工程系获得硕士学位，
              在外骨骼机器人、特种电机与无位置传感器控制方向积累了从机械结构、电机到算法的全栈研发经验。
            </p>
            <p>
              我关注能够真正落地的机器人系统：让算法理解真实硬件约束，也让机电设计为学习控制创造更好的条件。
            </p>
            <div className="metrics" aria-label="经历概览">
              <div><strong>2</strong><span>论文</span></div>
              <div><strong>5+</strong><span>发明专利</span></div>
              <div><strong>99%</strong><span>多地形行走成功率</span></div>
              <div><strong>1st</strong><span>硕士综合排名</span></div>
            </div>
          </section>

          <section id="publications">
            <div className="section-heading">
              <div><span>RESEARCH</span><h2>代表性论文</h2></div>
              <span className="section-count">02 / PUBLICATIONS</span>
            </div>
            <article className="publication-card featured">
              <div className="pub-year">2026</div>
              <div>
                <h3>Design and Cableless Close-Loop Control of a Separated-Structure Magnetic Actuator with Large Air Gap for Confined-Space Application</h3>
                <p className="authors"><strong>Kaijie Qi</strong>, Yunzhi Chen, Zhenguo Nie</p>
                <p className="venue">IEEE Transactions on Mechatronics</p>
                <p>面向受限空间应用，完成大气隙分离式磁驱动器设计，并提出无缆闭环控制方法。</p>
                <a className="paper-link" href="https://ieeexplore.ieee.org/document/11618735" target="_blank" rel="noreferrer">论文链接 ↗</a>
              </div>
            </article>
            <article className="publication-card">
              <div className="pub-year">2024</div>
              <div>
                <h3>Design and Development of a Five-Degree-of-Freedom Knee Joint Rehabilitation Robot with Multimode Signal Monitoring</h3>
                <p className="authors"><strong>Kaijie Qi</strong>, Dai Li, Handing Xu, Zikang Li, Hongshi Huang, Zhenguo Nie</p>
                <p className="venue">17th International Conference on Intelligent Robotics and Applications (ICIRA), Oral</p>
                <p>提出五自由度串联欠驱康复机构，集成关节转矩、角度、转速与肌电信号的多模态在线监测。</p>
                <a className="paper-link" href="https://doi.org/10.1007/978-981-96-0792-1_27" target="_blank" rel="noreferrer">DOI ↗</a>
              </div>
            </article>
          </section>

          <section id="projects" className="preview-projects">
            <div className="section-heading"><div><span>ENGINEERING</span><h2>核心项目</h2></div></div>
            <div className="project-grid">
              <article>
                <span className="project-index">01</span>
                <h3>外骨骼机器人与具身运控</h3>
                <p>基于 Isaac Lab 与 rsl_rl 搭建强化学习运控系统，覆盖整机结构、URDF 与多地形行走策略。</p>
                <div className="tags"><span>Isaac Lab</span><span>RL</span><span>AMP</span></div>
              </article>
              <article>
                <span className="project-index">02</span>
                <h3>大气隙电机无感控制</h3>
                <p>完成特种电机电磁结构设计、磁链观测与无位置传感速度闭环控制。</p>
                <div className="tags"><span>PMSM</span><span>FOC</span><span>SMO</span></div>
              </article>
              <article>
                <span className="project-index">03</span>
                <h3>人形机器人关节模组</h3>
                <p>面向不同关节转矩需求设计无框力矩电机，集成双边磁编码器，并在 STM32 平台实现位置、转速与转矩控制。</p>
                <div className="tags"><span>Motor Design</span><span>STM32</span><span>FOC</span></div>
              </article>
              <article>
                <span className="project-index">04</span>
                <h3>膝关节牵伸康复外骨骼</h3>
                <p>设计五自由度生理匹配机构与多模态信号系统，完成小型化驱动、整机结构及实时监测上位机。</p>
                <div className="tags"><span>Exoskeleton</span><span>Arduino</span><span>EMG</span></div>
              </article>
            </div>
          </section>

          <section id="experience">
            <div className="section-heading"><div><span>JOURNEY</span><h2>教育与经历</h2></div></div>
            <div className="timeline">
              <article>
                <div className="time">2026.09 — 至今</div>
                <div><h3>清华大学 · 人工智能学院</h3><p className="timeline-role">计算机科学与技术 · 博士研究生</p><p>强化学习、模仿学习，外骨骼机器人电机、整机与具身运动控制算法全栈设计。</p></div>
              </article>
              <article>
                <div className="time">2025.03 — 2025.07</div>
                <div><h3>荣耀终端有限公司 · 人形机器人部门</h3><p className="timeline-role">运动控制特聘实习生 · 部门首位实习生</p><p>参与人形机器人关节模组、电机控制、减速器及整机结构研发。</p></div>
              </article>
              <article>
                <div className="time">2023.09 — 2026.06</div>
                <div><h3>清华大学 · 机械工程系</h3><p className="timeline-role">机械工程 · 硕士</p><p>GPA 3.82/4.0，绩点排名 5/76，硕士第二学年综合排名第 1。</p></div>
              </article>
              <article>
                <div className="time">2019.09 — 2023.06</div>
                <div><h3>郑州大学 · 机械与动力工程学院</h3><p className="timeline-role">机械工程卓越工程师班 · 学士</p><p>GPA 3.77/4.0，绩点排名 2/299；连续两学年专业综合测评第 1。</p></div>
              </article>
            </div>
          </section>

          <section id="patents">
            <div className="section-heading"><div><span>INVENTIONS</span><h2>代表性专利</h2></div></div>
            <div className="patent-list">
              <article><span>CN117547439B</span><h3>一种五自由度的中心自适应膝关节静态渐进性牵伸训练器</h3><em>已授权</em></article>
              <article><span>CN117618223B</span><h3>一种集成信号检测系统的膝关节静态渐进性牵伸训练器</h3><em>已授权</em></article>
              <article><span>CN119244702A</span><h3>一种具有中空结构的摆线针齿轮减速器</h3><em>已公开</em></article>
              <article><span>CN121015293A</span><h3>髓内延长系统延伸长度控制装置及方法</h3><em>已公开</em></article>
              <article><span>CN117598768A</span><h3>具有中空贯穿结构的电磁驱动式髓内延长钉</h3><em>已公开</em></article>
            </div>
          </section>

          <section id="honors">
            <div className="section-heading"><div><span>RECOGNITION</span><h2>奖项与荣誉</h2></div></div>
            <div className="honors-layout">
              <div className="honor-group">
                <h3>荣誉奖项</h3>
                <ul>
                  <li><strong>国家奖学金</strong><span>2025 · 综合排名第 1</span></li>
                  <li><strong>清华大学优秀毕业论文</strong><span>2026 · 前 1%</span></li>
                  <li><strong>清华大学优良毕业生</strong><span>2026 · 前 5%</span></li>
                  <li><strong>国家奖学金</strong><span>2020、2021 · 综合排名第 1</span></li>
                  <li><strong>河南省优秀毕业论文</strong><span>2024</span></li>
                </ul>
              </div>
              <div className="honor-group">
                <h3>竞赛奖项</h3>
                <ul>
                  <li><strong>清华大学医工结合创新大赛</strong><span>冠军</span></li>
                  <li><strong>全国大学生先进成图大赛</strong><span>国家一等奖</span></li>
                  <li><strong>全国海洋航行器设计大赛</strong><span>国家二等奖</span></li>
                  <li><strong>全国大学生数学竞赛</strong><span>省级一等奖</span></li>
                  <li><strong>清华大学工匠大赛</strong><span>季军</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="toolkit" aria-labelledby="toolkit-title">
            <div><span>TOOLKIT</span><h2 id="toolkit-title">技术栈</h2></div>
            <div className="tool-cloud">
              {[
                "Isaac Lab", "rsl_rl", "Reinforcement Learning", "Imitation Learning", "AMP", "URDF",
                "MATLAB / Simulink", "PMSM", "FOC", "Sliding Mode Observer", "STM32", "Arduino",
                "Robot Mechanical Design", "Electromagnetic FEA", "Python", "Matplotlib"
              ].map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </section>

          <footer>
            <p>期待与关注机器人、具身智能与高性能运动控制的团队交流。</p>
            <a href="mailto:qkjtsinghua@163.com">qkjtsinghua@163.com ↗</a>
            <small>© 2026 Jason Qi · Built for robots that move beyond simulation.</small>
          </footer>
        </div>
      </main>
    </div>
  );
}
