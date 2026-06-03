; Custom NSIS include — Framora installer
; Provides a "Set as default Markdown viewer" checkbox page and
; handles registry writes / cleanup on install & uninstall.
;
; Included automatically by electron-builder when the `nsis.include`
; field in electron-builder.yml points here.

!macro customInstallMode
  ; ── Extra page: "Set Framora as default viewer?" ──────────────────────────
  nsDialogs::Create 1018
  Pop $0
  ${If} $0 == error
    Abort
  ${EndIf}

  ; Header text (handled by electron-builder's page framework, but we add a
  ; descriptive label inside the dialog area).
  ${NSD_CreateLabel} 0 0 100% 36u "Framora can register itself as the default \
application for Markdown files on this machine. \
You can always change this later via Windows Default Apps."

  Var /GLOBAL SetDefaultCB
  ${NSD_CreateCheckbox} 0 44u 100% 14u \
    "Set Framora as the default viewer for Markdown files (.md, .markdown, etc.)"
  Pop $SetDefaultCB
  ; Pre-tick the checkbox
  ${NSD_Check} $SetDefaultCB

  nsDialogs::Show
!macroend

!macro customInstall
  ; Read the checkbox state saved by customInstallMode
  ${NSD_GetState} $SetDefaultCB $0

  ${If} $0 == ${BST_CHECKED}
    ; Register a ProgID  ─────────────────────────────────────────────────────
    WriteRegStr HKCU "Software\Classes\FramoraMD" \
      "" "Markdown Document"
    WriteRegStr HKCU "Software\Classes\FramoraMD\DefaultIcon" \
      "" "$INSTDIR\Framora.exe,0"
    WriteRegStr HKCU "Software\Classes\FramoraMD\shell\open\command" \
      "" '"$INSTDIR\Framora.exe" "%1"'
    WriteRegStr HKCU "Software\Classes\FramoraMD\shell\open" \
      "FriendlyAppName" "Framora"

    ; Point each extension to our ProgID ─────────────────────────────────────
    WriteRegStr HKCU "Software\Classes\.md"       "" "FramoraMD"
    WriteRegStr HKCU "Software\Classes\.markdown" "" "FramoraMD"
    WriteRegStr HKCU "Software\Classes\.mdown"    "" "FramoraMD"
    WriteRegStr HKCU "Software\Classes\.mkd"      "" "FramoraMD"
    WriteRegStr HKCU "Software\Classes\.mkdn"     "" "FramoraMD"
    WriteRegStr HKCU "Software\Classes\.qmd"      "" "FramoraMD"

    ; Also add to OpenWithProgids so Framora appears in "Open with" lists ────
    WriteRegStr HKCU \
      "Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.md\OpenWithProgids" \
      "FramoraMD" ""
    WriteRegStr HKCU \
      "Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.markdown\OpenWithProgids" \
      "FramoraMD" ""

    ; Flush the shell so icon / association changes take effect immediately ──
    System::Call 'Shell32::SHChangeNotify(i 0x08000000, i 0x00001000, p 0, p 0)'
  ${EndIf}
!macroend

!macro customUnInstall
  ; Clean up our ProgID and extension pointers on uninstall ──────────────────
  DeleteRegKey HKCU "Software\Classes\FramoraMD"

  ; Only remove extension pointers if they still point at us
  ReadRegStr $0 HKCU "Software\Classes\.md" ""
  ${If} $0 == "FramoraMD"
    DeleteRegValue HKCU "Software\Classes\.md" ""
  ${EndIf}
  ReadRegStr $0 HKCU "Software\Classes\.markdown" ""
  ${If} $0 == "FramoraMD"
    DeleteRegValue HKCU "Software\Classes\.markdown" ""
  ${EndIf}

  DeleteRegValue HKCU \
    "Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.md\OpenWithProgids" \
    "FramoraMD"
  DeleteRegValue HKCU \
    "Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.markdown\OpenWithProgids" \
    "FramoraMD"

  System::Call 'Shell32::SHChangeNotify(i 0x08000000, i 0x00001000, p 0, p 0)'
!macroend