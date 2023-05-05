import React from "react";
import styles from "../../../styles/Stepper.module.css";
import {
  FaPenSquare,
  FaPencilRuler,
  FaLocationArrow,
  FaChartPie,
  FaFlagCheckered,
} from "react-icons/fa";
const Stepper = (props) => {
  const colors = {
    primary: "#09A79D",
    secondary: "#faae12",
    gray: "#b8b8b8",
  };
  return (
    <div class={styles.stepper}>
      {/******************************ETAPE 1 ***********************/}
      <div className={styles.step}>
        <div
          style={{
            borderBlockColor: props.index >= 1 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
        <div className={styles.step_content}>
          <FaPenSquare
            style={{ color: props.index >= 1 ? colors.secondary : colors.gray }}
            className={styles.icon}
          ></FaPenSquare>
          <div className={styles.step_text}>
            <p className={styles.step_count}>ETAPE 1 SUR 5</p>
            <p
              style={{ fontWeight: props.index == 1 ? "bold" : "normal" }}
              className={styles.step_title}
            >
              Données
            </p>
          </div>
        </div>
        <div
          style={{
            borderBlockColor: props.index >= 1 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
      </div>
      {/******************************ETAPE 2 ***********************/}
      <div class={styles.step}>
        <div
          style={{
            borderBlockColor: props.index >= 2 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
        <div className={styles.step_content}>
          <FaPencilRuler
            style={{ color: props.index >= 2 ? colors.secondary : colors.gray }}
            className={styles.icon}
          ></FaPencilRuler>
          <div className={styles.step_text}>
            <p className={styles.step_count}>ETAPE 2 SUR 5</p>
            <p
              style={{ fontWeight: props.index == 2 ? "bold" : "normal" }}
              className={styles.step_title}
            >
              Projet
            </p>
          </div>
        </div>
        <div
          style={{
            borderBlockColor: props.index >= 2 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
      </div>
      {/******************************ETAPE 3 ***********************/}
      <div class={styles.step}>
        <div
          style={{
            borderBlockColor: props.index >= 3 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
        <div className={styles.step_content}>
          <FaLocationArrow
            style={{ color: props.index >= 3 ? colors.secondary : colors.gray }}
            className={styles.icon}
          ></FaLocationArrow>
          <div className={styles.step_text}>
            <p className={styles.step_count}>ETAPE 3 SUR 5</p>
            <p
              style={{ fontWeight: props.index == 3 ? "bold" : "normal" }}
              className={styles.step_title}
            >
              Emplacement
            </p>
          </div>
        </div>
        <div
          style={{
            borderBlockColor: props.index >= 3 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
      </div>
      {/******************************ETAPE 4 ***********************/}
      <div class={styles.step}>
        <div
          style={{
            borderBlockColor: props.index >= 4 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
        <div className={styles.step_content}>
          <FaChartPie
            style={{ color: props.index >= 4 ? colors.secondary : colors.gray }}
            className={styles.icon}
          ></FaChartPie>
          <div className={styles.step_text}>
            <p className={styles.step_count}>ETAPE 4 SUR 5</p>
            <p
              style={{ fontWeight: props.index == 4 ? "bold" : "normal" }}
              className={styles.step_title}
            >
              Consommation
            </p>
          </div>
        </div>
        <div
          style={{
            borderBlockColor: props.index >= 4 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
      </div>
      {/******************************ETAPE 5 ***********************/}
      <div class={styles.step}>
        <div
          style={{
            borderBlockColor: props.index >= 4 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
        <div className={styles.step_content}>
          <FaFlagCheckered
            style={{ color: props.index >= 5 ? colors.secondary : colors.gray }}
            className={styles.icon}
          ></FaFlagCheckered>
          <div className={styles.step_text}>
            <p className={styles.step_count}>ETAPE 5 SUR 5</p>
            <p
              style={{ fontWeight: props.index == 5 ? "bold" : "normal" }}
              className={styles.step_title}
            >
              Finalisation
            </p>
          </div>
        </div>
        <div
          style={{
            borderBlockColor: props.index >= 4 ? colors.primary : colors.gray,
          }}
          class={styles.h_line}
        ></div>
      </div>
    </div>
  );
};

export default Stepper;
