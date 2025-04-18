import styles from "./App.module.css";
const Card = () => {
  return (
    <div className={styles.f_card}>
      <Header />
      <div className={styles.content}>
        <p>
          Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸
        </p>
      </div>

      <div className={styles.reference}>
        <img className={styles.reference_thumb} src="https://loremflickr.com/476/250" />
        <div className={styles.reference_content}>
          <div className={styles.reference_title}>
            The Ultimate Guide to Napping Like a Cat | CatNapTips
          </div>
          <div className={styles.reference_subtitle}>
            Learn the art of napping, feline style! Just follow these simple tips.
          </div>
          <div className={styles.reference_font}>catnaptips.com</div>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.social_content}></div>
        <div className={styles.social_buttons}>
          <span>
            <i className="fa fa-thumbs-up"></i>Paws Up!
          </span>
          <span>
            <i className="fa fa-comment"></i>Meow-back
          </span>
          <span>
            <i className="fa fa-share"></i>Share the Cat-titude
          </span>
        </div>
      </div>

    </div>
  );
}

const Header = () => {
  return (
    <div className={styles.header}>
      <Options />
      <UserAvatar />
      <UserName />
      <TimePosted />
    </div>
  )
}
const Options = () => {
  return (
    <div className={styles.options}>
      <i className="fa fa-chevron-down"></i>
    </div>
  )
}
const UserName = () => {
  return (
    <div className={styles.co_name}>
      <a href="#">Cat Stevens</a>
    </div>
  )
}
const UserAvatar = () => {
  return (
    <img
      className={styles.co_logo}
      src="https://loremflickr.com/40/40"
    />
  )
}
const TimePosted = () => {
  return (
    <div className={styles.time}>
      <a href="#">Just 9 lives ago</a> · <i className="fa fa-globe"></i>
    </div>
  )
}
const App = () => {
  return (
    <>
      <Card />
    </>
  );
};

export default App;
