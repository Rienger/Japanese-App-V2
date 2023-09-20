import React from "react";
import NavbarLinks from "./NavbarLinks";

const NavbarRight = () => {
  return (
    <div className="hidden lg:flex">
      <NavbarLinks linkName="Kana" route="/kana" />
      <NavbarLinks linkName="PartsOfSpeech" route="/pos" />
      <NavbarLinks linkName="Cards" route="/flashcard" />
      <NavbarLinks linkName="PracticeVerb" route="/practice-verb" />
      <NavbarLinks linkName="Reading" route="/reading" />
      <NavbarLinks linkName="Challenge" route="/challenge" />
      <NavbarLinks linkName="Kanji" route="/kanji" />
    </div>
  );
};

export default NavbarRight;
