@echo off
pushd "%~dp0mods" || (
  echo ERROR: mods\ folder not found.
  exit /b 1
)

set patterns=better_smithing_ui continuity LegendaryTooltips make_bubbles_pop NekosEnchantedBooks nolijium oculus YungsMenuTweaks

for %%P in (%patterns%) do (
  for %%F in (*%%P*.jar) do (
    echo Deleting "%%F"
    del /q "%%F"
  )
)

popd

echo.
echo Done.
pause